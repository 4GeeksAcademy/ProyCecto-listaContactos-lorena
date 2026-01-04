import { useState } from "react";
import { Link } from "react-router-dom";

export const Formulario = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })


    async function postContact(event) {
        console.log(inputValue);        
        event.preventDefault()
        await fetch("https://playground.4geeks.com/contact/agendas/lorena/contacts", {
            method: "POST", // Accion / Metodo usado
            body: JSON.stringify(inputValue), // Lo que se envia
            headers: { "Content-type": "application/json" } // El tipo de informacion que se envia
        })
    }

    






    return (
        <form className="row g-3 needs-validation" onSubmit={postContact} >
            <h2>Add a new contact</h2>
            <div className="col-md-12 px-4">
                <label htmlFor="validationCustomUsername" className="form-label ">Name</label>
                <div className="input-group ">
                    <input type="text" onChange={e => setInputValue({ ...inputValue, name: e.target.value })
                    } value={inputValue.name}  placeholder="Name" className="w-100"/>
                    
                </div>

                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                <div className="input-group  w-full">
                    <input type="text" onChange={e => setInputValue({ ...inputValue, email: e.target.value })
                    } value={inputValue.email}  placeholder="email" className="w-100"/>
                    
                </div>

                <label htmlFor="validationCustomUsername" className="form-label">Phone</label>
                <div className="input-group  w-full">

                    <input type="number" onChange={e => setInputValue({...inputValue, phone: e.target.value}) 
                    } value={inputValue.phone} placeholder="phone" className="w-100"/>
                   
                </div>

                <label htmlFor="validationCustomUsername" className="form-label">Address</label>
                <div className="input-group  w-full">

                    <input type="text" onChange={e => setInputValue({...inputValue, address: e.target.value})
                    } value={inputValue.address} placeholder="address" className="w-100"/>
                    
                </div>

            </div>


            <div className="col-12 px-4">
                <button className="btn btn-primary w-100" type="submit">Save</button>
            </div>

            <Link to="/">
               <p class="link-opacity-100">Or get back to contacts</p>
            </Link>
        </form>
    )
};