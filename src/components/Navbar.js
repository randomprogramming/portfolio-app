import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";

export default class Navbar extends Component {
	render() {
		return (
			<div className="navbar-main-flex">
				<div className="navbar-logo">Logo here</div>
				<div className="navbar-buttons-container">
					<ul className="navbar-menu-list">
						<li id="navbar-home-li">
							<Link className="navbar-a" to="/">
								Home
							</Link>
						</li>
						<li id="navbar-about-li">
							<Link className="navbar-a" to="/about">
								About me
							</Link>
						</li>
						<li id="navbar-projects-li">
							<Link className="navbar-a" to="/projects">
								Projects
							</Link>
						</li>
						<li id="navbar-contact-li">
							<Link className="navbar-a" to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
