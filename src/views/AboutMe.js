import React, { Component } from "react";

import "../css/AboutMe.css";
import Name from "../images/name.png";
import Location from "../images/location.png";
import Email from "../images/email.png";
import Phone from "../images/phone.png";
import Github from "../images/github.png";

export default class AboutMe extends Component {
	render() {
		return (
			// TODO: Rewrite this and turn a link into a component to reduce the repetitive code
			<div className="about-me-container">
				<div className="links-container">
					<div className="link-name">
						<img
							className="link-name-img link-img"
							src={links.name.icon}
							alt="name"
							style={{ borderColor: "#FD003A" }}
						/>
						<span className="link-name-text">{links.name.text}</span>
					</div>

					<div className="link-location">
						<img
							className="link-location-img link-img"
							src={links.location.icon}
							alt="location"
							style={{ borderColor: "#1689FC" }}
						/>
						<span className="link-location-text">{links.location.text}</span>
					</div>

					<div className="link-email">
						<img
							className="link-email-img link-img"
							src={links.email.icon}
							alt="email"
							style={{ borderColor: "#FD003A" }}
						/>
						<span className="link-email-text">{links.email.text}</span>
					</div>

					<div className="link-phone">
						<img
							className="link-phone-img link-img"
							src={links.phone.icon}
							alt="phone"
							style={{ borderColor: "#1689FC" }}
						/>
						<span className="link-phone-text">{links.phone.text}</span>
					</div>

					<div className="link-github">
						<img
							className="link-github-img link-img"
							src={links.github.icon}
							alt="github"
							style={{ borderColor: "#FD003A" }}
						/>
						<span className="link-github-text">{links.github.text}</span>
					</div>
				</div>
			</div>
		);
	}
}

const links = {
	name: {
		icon: Name,
		text: "Dominik",
	},
	location: {
		icon: Location,
		text: "Croatia🇭🇷",
	},
	email: {
		icon: Email,
		text: "xxxxxxxx@tvz.hr",
	},
	phone: {
		icon: Phone,
		text: "099xxxxxxx",
	},
	github: {
		icon: Github,
		text: "github.com/randomprogramming",
	},
};
