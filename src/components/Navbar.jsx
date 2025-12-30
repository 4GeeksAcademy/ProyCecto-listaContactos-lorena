import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ml-auto">
					<Link to="/formulario">
						<button className="btn btn-primary">Add new contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};