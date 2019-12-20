import React, { Component } from "react";

import "../css/Projects.css";
import Project from "../components/Project";
import WeatherApp from "../images/projects/weather-app.png";
import PortfolioApp from "../images/projects/portfolio-app.png";
import Test from "../images/projects/test.png";
import GOL from "../images/projects/game-of-life.png";

export default class Projects extends Component {
	render() {
		return (
			<div className="projects-main-container">
				{listOfProjects.map(project => {
					return (
						<Project
							key={project.name}
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
	{
		name: "Game of Life",
		description:
			"Recreation of the famous Game of Life, with many features such as: slowing down or speeding up the game, " +
			"pausing the game, adding as many tiles as you'd like and more. ",
		link: "https://github.com/randomprogramming/Game-of-Life",
		image: GOL,
	},
];
