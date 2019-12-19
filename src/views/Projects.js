import React, { Component } from "react";

import "../css/Projects.css";
import Project from "../components/Project";

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

const listOfProjects = [
	{
		name: "Weather app",
		description:
			"This little weather app was built on top of the OpenWeatherMap API. You" +
			"can search for cities and see the current weather in the selected city." +
			"It was built using React and standard JavaScript. It was a very fun project, but unfortunately " +
			"I wasn't able to fully finish it since some of the API features are hidden behind a paywall.",
		link: "https://github.com/randomprogramming/weather-app",
		image: "f",
	},
];
