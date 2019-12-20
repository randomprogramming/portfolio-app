import React, { Component } from "react";

export default class TechnologiesList extends Component {
	render() {
		return (
			<ul className="about-me-technologies-list">
				{this.props.techs.map(tech => (
					<li key={tech.text} className="technologies-list-item">
						{tech.text} <img src={tech.icon} alt="Java" className="list-img" />
					</li>
				))}
			</ul>
		);
	}
}
