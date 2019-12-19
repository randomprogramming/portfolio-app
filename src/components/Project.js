import React, { Component } from "react";

export default class Project extends Component {
	render() {
		const { name, description, link, image } = this.props;
		return (
			<div className="project-container">
				<h1>
					{name} {description} {link} {image}
				</h1>
			</div>
		);
	}
}
