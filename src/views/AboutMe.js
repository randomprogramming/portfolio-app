import React, { Component } from "react";

import "../css/AboutMe.css";
import Name from "../images/name.png";
import Location from "../images/location.png";
import Email from "../images/email.png";
import Phone from "../images/phone.png";
import Github from "../images/github.png";
import Java from "../images/technologies/java.png";
import Spring from "../images/technologies/spring.png";
import Javascript from "../images/technologies/javascript.png";
import Html from "../images/technologies/html.png";
import Css from "../images/technologies/css.png";
import ReactImg from "../images/technologies/react.png";
import Clang from "../images/technologies/clang.png";
import Git from "../images/technologies/git.png";
import Links from "../components/Links";

export default class AboutMe extends Component {
	render() {
		return (
			<div className="about-me-container">
				<div className="links-container">
					{/* For each link in array, create a Links Component, and place every other Links to the left */}
					{links.map((link, i) => (
						<Links
							key={link.text}
							icon={link.icon}
							text={link.text}
							isRight={i % 2 === 0 ? true : false}
						/>
					))}
				</div>

				<p className="about-me-text-container">
					I am a 19 year old student currently studying Computing at the{" "}
					<a href="https://tvz.hr">Zagreb University of Applied Sciences</a>. My passion for
					programming began in 2nd grade of high school, where we started learning about C. A couple
					of years have passed since then, and today I consider myself a full-stack developer. I
					love learning new things, so I am always trying to either learn something completely new,
					or improve my knowledge about certain languages, frameworks and other technologies. I
					currently have experience working with the following technologies:{" "}
					{/* TODO: Remove <ul/> from the <p/> tag, move it somewhere else, make a flexbox and use inline flex with <p/> */}
					<ul className="about-me-technologies-list">
						{/* TODO: Turn this into its own Component which takes in the text and the image and makes a list from them */}
						<li className="technologies-list-item">
							{technologies.java.text}{" "}
							<img src={technologies.java.icon} alt="Java" className="list-img" />
						</li>
						<li className="technologies-list-item">
							{technologies.spring.text}{" "}
							<img src={technologies.spring.icon} alt="Spring" className="list-img" />
						</li>
						<li className="technologies-list-item">
							{technologies.javascript.text}{" "}
							<img src={technologies.javascript.icon} alt="Javascript" className="list-img" />
						</li>
						<li className="technologies-list-item">
							{technologies.html.text}{" "}
							<img src={technologies.html.icon} alt="HTML" className="list-img" />
						</li>
						<li className="technologies-list-item">
							{technologies.css.text}{" "}
							<img src={technologies.css.icon} alt="CSS" className="list-img" />
						</li>
						<li className="technologies-list-item">
							{technologies.react.text}{" "}
							<img src={technologies.react.icon} alt="React" className="list-img" />
						</li>
						<li className="technologies-list-item">
							{technologies.clang.text}{" "}
							<img src={technologies.clang.icon} alt="C" className="list-img" />
						</li>
						<li className="technologies-list-item">
							{technologies.git.text}{" "}
							<img src={technologies.git.icon} alt="Git" className="list-img" />
						</li>
					</ul>
				</p>
				<div className="footer">
					<p>
						Big thanks to{" "}
						<a href="https://www.flaticon.com/authors/freepik" title="Freepik">
							Freepik
						</a>{" "}
						from{" "}
						<a href="https://www.flaticon.com/" title="Flaticon">
							www.flaticon.com
						</a>{" "}
						for making these awesome icons!
					</p>
				</div>
			</div>
		);
	}
}

const links = [
	{
		icon: Name,
		text: "Dominik",
	},
	{
		icon: Location,
		text: "Croatia🇭🇷",
	},
	{
		icon: Email,
		text: "xxxxxxxx@tvz.hr",
	},
	{
		icon: Phone,
		text: "099xxxxxxx",
	},
	{
		icon: Github,
		text: "github.com/randomprogramming",
	},
];

const technologies = {
	java: {
		icon: Java,
		text: "Java",
	},
	spring: {
		icon: Spring,
		text: "Spring",
	},
	javascript: {
		icon: Javascript,
		text: "JavaScript",
	},
	html: {
		icon: Html,
		text: "HTML",
	},
	css: {
		icon: Css,
		text: "CSS",
	},
	react: {
		icon: ReactImg,
		text: "React",
	},
	clang: {
		icon: Clang,
		text: "C",
	},
	git: {
		icon: Git,
		text: "Git",
	},
};
