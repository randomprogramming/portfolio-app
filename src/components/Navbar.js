import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../css/Navbar.css";

export default class Navbar extends Component {
	render() {
		return (
			<div className="navbar-main-flex">
				<div className="navbar-logo">randomprogramming</div>
				<div className="navbar-buttons-container">
					<ul className="navbar-menu-list">
						<li id="navbar-home-li">
							<NavLink className="navbar-a" exact to="/" activeStyle={active}>
								Home
							</NavLink>
						</li>
						<li id="navbar-about-li">
							<NavLink className="navbar-a" exact to="/about" activeStyle={active}>
								About me
							</NavLink>
						</li>
						<li id="navbar-projects-li">
							<NavLink className="navbar-a" exact to="/projects" activeStyle={active}>
								Projects
							</NavLink>
						</li>
						<li id="navbar-contact-li">
							<NavLink className="navbar-a" exact to="/contact" activeStyle={active}>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

const active = {
	textDecoration: "underline",
};
