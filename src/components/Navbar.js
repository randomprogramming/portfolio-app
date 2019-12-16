import React from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";

export const Navbar = () => {
	return (
		<div className="navbar-main-flex">
			<div className="navbar-logo">Logo here</div>
			<div className="navbar-buttons-container">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About me</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
