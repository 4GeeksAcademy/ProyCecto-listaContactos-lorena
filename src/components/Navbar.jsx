import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light d-flex justify-content-end px-4">
			
				<div className="ml-auto">
					<Link to="/formulario" className="">
						<button className="btn btn-primary">Add new contact</button>
					</Link>
				
			</div>
		</nav>
	);
};