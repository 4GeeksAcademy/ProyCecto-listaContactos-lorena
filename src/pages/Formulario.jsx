import { useState } from "react";
import { Link } from "react-router-dom";
export const Formulario = () => {
    const [inputValue,setInputValue] = useState("")

    return (
        <form className="row g-3 needs-validation" novalidate>
            <h2>Add a new contact</h2>
            <div className="col-md-12">
                <label htmlFor="validationCustom01" className="form-label">Full name</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    value= {inputValue} onChange={handleOnchange}/>
                <div className="valid-feedback"></div>


            </div>

            <div className="col-md-12">
                <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                    </div>
                </div>

            </div>

            <div className="mb-12">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                    type="number"
                    className="form-control"
                    id="telefono"
                    pattern="[0-9]{10}"

                />
            </div>


            <div className="col-md-12">
                <label htmlFor="validationCustom03" className="form-label">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="validationCustom03" required />

            </div>


            <div className="col-12">

                <button className="btn btn-primary" type="submit">Save</button>
            </div>
         

            <Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link>
        </form>
    )
};







