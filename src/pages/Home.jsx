
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react"
import { useState } from "react";
import { Link } from "react-router-dom"

export const Home = () => {
	const { store, dispatch } = useGlobalReducer()
	const [showModal, setShowModal] = useState(false);
	const [selectedContact, setSelectedContact] = useState(null);
	

	useEffect(() => {
		console.log("useEffect")
		getcontacts()
	}, [])

	//GET trae todos los contactos de la agenda
	async function getcontacts() {
		try {
			let response = await fetch("https://playground.4geeks.com/contact/agendas/lorena")
			console.log(response)
			let data = await response.json()
			console.log(data)
			dispatch({
				type: "setcontacts", payload: data.contacts
			});
		} catch (error) {
			console.log(error)
		}
	}
	console.log(store.contacts)

	async function deleteContact(id) {
		let response = await fetch(`https://playground.4geeks.com/contact/agendas/lorena/contacts/${id}`, {
			method: "DELETE", // Accion / Metodo usado
		})
		console.log(response);
		if (response.ok) {
			dispatch({
				type: "deletecontact",
				payload: id
			});
		}
	}





	return (
		<div className=" mt-5">
			{store.contacts.map(contact => (
				<div className="d-flex  border gap-4 py-4">
					<div style={{ width: "100px", height: "100px" }}
						className="rounded-circle justify-content-center"><img src="https://i.pinimg.com/736x/23/8b/7b/238b7b677f3ccdd98a1c5e4c0ed81b5b.jpg" alt="foto de perfil" className="w-100 h-100 object-fit-cover" /></div>
					<div key={contact.id} className="w-75">
						<h2 className="fs-6">{contact.name}</h2>
						<p className="m-0" ><svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px" viewBox="-34.08 -34.08 494.12 494.12" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081 c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002 c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482 C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884 c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"></path> </g> </g></svg> {contact.address}</p>
						<p className="m-0"> <svg width="14px" height="14px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.256"></g><g id="SVGRepo_iconCarrier"> <title>phone</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-258.000000, -309.000000)" fill="#000000"> <path d="M289.073,313.433 L286.195,310.563 C285.401,309.77 284.112,309.77 283.317,310.563 L279,316.303 C278.341,317.274 278.206,318.38 279,319.173 L280.762,320.93 C279.456,322.68 277.888,324.588 276.123,326.348 C274.127,328.338 271.907,330.147 269.911,331.633 L268.208,329.936 C267.414,329.143 266.305,329.277 265.33,329.936 L259.574,334.241 C258.609,334.906 258.779,336.318 259.574,337.111 L262.452,339.98 C264.042,341.566 266.109,341.058 268.208,339.98 C268.208,339.98 274.561,336.424 280,331 C285.116,325.898 289.073,319.173 289.073,319.173 C289.898,316.91 290.663,315.018 289.073,313.433" id="phone" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg> {contact.phone}</p>
						<p className="m-0"><svg width="14px" height="14px" viewBox="-3.6 -3.6 27.20 27.20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#1572]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z" id="email-[#1572]"> </path> </g> </g> </g> </g></svg>{contact.email}</p>
					</div>
					<div className="d-flex">
						<Link to={`/contact/${contact.id}`}><button className="btn h-50"><svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z" fill="#000000"></path></g></svg></button></Link>
						<button className="btn h-50" onClick={() => { setSelectedContact(contact.id); setShowModal(true) }}><svg width="18px" height="18px" viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"></path></g></svg></button>
					</div>
				</div>
			))}
			{showModal && selectedContact && (
				<div className="modal fade show d-block" tabIndex="-1">
					<div className="modal-dialog m-t 5">
						<div className="modal-content">

							<div className="modal-header">
								<h5 className="modal-title">Are you sure?</h5>
								<button
									type="button"
									className="btn-close"
									onClick={() => setShowModal(false)}
								></button>
							</div>

							<div className="modal-body">
								<p>
									If you deleted this thing the entire universe will go domn!									
								</p>								
							</div>

							<div className="modal-footer">
								<button
									className="btn btn-primary"
									onClick={() => setShowModal(false)}
								>
									Oh no!
								</button>

								<button
									className="btn btn-secondary"
									onClick={() => {
										deleteContact(selectedContact);
										setShowModal(false);
									}}
								>
									Yes baby!
								</button>
							</div>

						</div>
					</div>
				</div>
			)}

		</div>
	);
};


