import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";

export default class Navbar extends Component {
	componentDidMount() {
		//This is here so that if the user loads the page directyly with a url like /projects,
		//we will still get a underline

		//Get the current url, split it by /, and then select the last
		//element, which will be the current location(home,about,projects,contact)
		let location = window.location.href.split("/");
		location = location[location.length - 1];
		//Depending on the location, set the corresponding link style to underline
		if (location === "about") {
			document.getElementById("navbar-about-li").style.textDecoration = "underline";
		} else if (location === "projects") {
			document.getElementById("navbar-projects-li").style.textDecoration = "underline";
		} else if (location === "contact") {
			document.getElementById("navbar-contact-li").style.textDecoration = "underline";
		} else {
			document.getElementById("navbar-home-li").style.textDecoration = "underline";
		}
	}
	removeAllStyling() {
		document.getElementById("navbar-home-li").style.textDecoration = "none";
		document.getElementById("navbar-about-li").style.textDecoration = "none";
		document.getElementById("navbar-projects-li").style.textDecoration = "none";
		document.getElementById("navbar-contact-li").style.textDecoration = "none";
	}
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
