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
import TechnologiesList from "../components/TechnologiesList";

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

				<div className="about-me-text-container">
					<p className="about-me-text">
						I am a 19 year old student currently studying Computing at the{" "}
						<a href="https://tvz.hr">Zagreb University of Applied Sciences</a>. My passion for
						programming began in 2nd grade of high school, where we started learning about C. A
						couple of years have passed since then, and today I consider myself a full-stack
						developer. I love learning new things, so I am always trying to either learn something
						completely new, or improve my knowledge about certain languages, frameworks and other
						technologies. I currently have experience working with the following technologies:{" "}
					</p>

					<div className="technologies">
						{/* Tehcnologies list is a ul > li tag which creates a li for each tech in the technologies array */}
						<TechnologiesList techs={technologies} />
					</div>
				</div>

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

const technologies = [
	{
		icon: Java,
		text: "Java",
	},
	{
		icon: Spring,
		text: "Spring",
	},
	{
		icon: Javascript,
		text: "JavaScript",
	},
	{
		icon: Html,
		text: "HTML",
	},
	{
		icon: Css,
		text: "CSS",
	},
	{
		icon: ReactImg,
		text: "React",
	},
	{
		icon: Clang,
		text: "C",
	},
	{
		icon: Git,
		text: "Git",
	},
];
