import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import { useEffect } from "react"
export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {

		getcontacts()


	}, [])
	async function getcontacts() {
		try {
			let response = await fetch("https://playground.4geeks.com/contact/agendas/lorena")
			let data = await response.json()
			dispatch({
				type: "setcontacts", payload: data.contacts
			})


		} catch (error) {
			console.log(error)
		}

	}

	console.log(store.contacts)

	async function postContact(event) {
		event.preventDefault()

		const newContact = {
			"name": "",
			"phone": "",
			"email": "",
			"address": ""
		}
		await fetch("https://playground.4geeks.com/contact/agendas/lorena/contacts", {
			method: "POST", // Accion / Metodo usado
			body: JSON.stringify(newContact), // Lo que se envia
			headers: { "Content-type": "application/json" } // El tipo de informacion que se envia
		})

		getcontact()

		async function deleteContact(id) {
			await fetch(`https://playground.4geeks.com/contact/agendas/lorena/contacts/${id}`, {
				method: "DELETE", // Accion / Metodo usado
			})
			getcontact()
		}

	}

	return (
		<div className="text-center mt-5">

		</div>
	);
}; 


