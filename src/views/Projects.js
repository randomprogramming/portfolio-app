import React, { Component } from "react";

import "../css/Projects.css";
import Project from "../components/Project";
import WeatherApp from "../images/projects/weather-app.png";
import PortfolioApp from "../images/projects/portfolio-app.png";

export default class Projects extends Component {
	render() {
		return (
			<div className="projects-main-container">
				{listOfProjects.map(project => {
					return (
						<Project
							name={project.name}
							description={project.description}
							link={project.link}
							image={project.image}
						/>
					);
				})}
			</div>
		);
	}
}
// Add projects here
const listOfProjects = [
	{
		name: "Weather app",
		description:
			"This little weather app was built on top of the OpenWeatherMap API. You " +
			"can search for cities and see the current weather in the selected city. " +
			"It was built using React and standard JavaScript. ",
		link: "https://github.com/randomprogramming/weather-app",
		image: WeatherApp,
	},
	{
		name: "Portfolio app",
		description: "My own portfolio website built using React, the current website you are on.",
		link: "https://github.com/randomprogramming/portfolio-app",
		image: PortfolioApp,
	},
];
