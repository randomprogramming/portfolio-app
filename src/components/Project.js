import React, { Component } from "react";

import "../css/Project.css";

export default class Project extends Component {
	render() {
		const { name, description, link, image } = this.props;
		return (
			<div className="project-container">
				<img src={image} alt="project" className="image-container" />
				<div className="text-container">
					<div className="project-title-link">
						<h1 className="project-title">{name}</h1>
						<a className="project-link" href={link}>
							{link}
						</a>
					</div>
					<div clasName="project-description">
						<p className="project-description-text">{description}</p>
					</div>
				</div>
			</div>
		);
	}
}
