import { useEffect, useState } from "react";
import { Link,  useNavigate, useParams, } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";



export const Formulario = () => {
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const { id } = useParams()

    useEffect(() => {
        console.log(id);
        console.log(store.contacts.length);
        //si existe un ID y si tienes datos el array 
        if (id && store.contacts.length > 0) {
            console.log(store.contacts.length);
// busca dentro del array contacts el primer objeto cuyo contact.id sea igual al id que viene de la URL que s eobtiene con useParams()
            const contact = store.contacts.find(contact => contact.id == Number(id))
            console.log(contact);
//si encuentra, actualiza el inputvalue con los datos del objeto
            if (contact) { setInputValue(contact) }

        }
    }, [])

   


    async function postContact(event) {
        console.log(inputValue);
        event.preventDefault()
        //si existe un id, modifica los datos haciendo un PUT y si respone ok redirecciona a Home
        if (id) {
            let response = await fetch(`https://playground.4geeks.com/contact/agendas/lorena/contacts/${id}`, {
                method: "PUT", // Accion / Metodo usado para modificar
                body: JSON.stringify(inputValue), // Lo que se envia
                headers: { "Content-type": "application/json" } // El tipo de informacion que se envia
            })
            if (response.ok) {
                navigate("/")
            }
        }
        // y si no hace un POST para crear un contacto nuevo 
        else {
            let response = await fetch("https://playground.4geeks.com/contact/agendas/lorena/contacts", {
                method: "POST", // Accion / Metodo usado crear
                body: JSON.stringify(inputValue), // Lo que se envia
                headers: { "Content-type": "application/json" } // El tipo de informacion que se envia
            })
            if (response.ok) {
                navigate("/")
            }
        }
    }








    return (
        <form className="row g-3 needs-validation" onSubmit={postContact} >
            <h2>Add a new contact</h2>
            <div className="col-md-12 px-4">
                <label htmlFor="validationCustomUsername" className="form-label ">Name</label>
                <div className="input-group ">
                    <input type="text" onChange={e => setInputValue({ ...inputValue, name: e.target.value })
                    } value={inputValue.name} placeholder="Name" className="w-100" />

                </div>

                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                <div className="input-group  w-full">
                    <input type="text" onChange={e => setInputValue({ ...inputValue, email: e.target.value })
                    } value={inputValue.email} placeholder="email" className="w-100" />

                </div>

                <label htmlFor="validationCustomUsername" className="form-label">Phone</label>
                <div className="input-group  w-full">

                    <input type="number" onChange={e => setInputValue({ ...inputValue, phone: e.target.value })
                    } value={inputValue.phone} placeholder="phone" className="w-100" />

                </div>

                <label htmlFor="validationCustomUsername" className="form-label">Address</label>
                <div className="input-group  w-full">

                    <input type="text" onChange={e => setInputValue({ ...inputValue, address: e.target.value })
                    } value={inputValue.address} placeholder="address" className="w-100" />
                </div>
            </div>


            <div className="col-12 px-4">
                <button className="btn btn-primary w-100" type="submit">Save</button>
            </div>

            <Link to="/" className="link-opacity-100 ps-4 d-inline-block ">
                Or get back to contacts
            </Link>
        </form>
    )
};