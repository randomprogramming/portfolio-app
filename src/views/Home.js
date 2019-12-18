import React, { Component } from "react";

import "../css/Home.css";

export default class Home extends Component {
	render() {
		return (
			<div className="home-container">
				<div className="home-welcome-text-container">
					<div className="home-welcome-text">
						<div style={first}>Hello</div>
						<div>and</div>
						<div style={third}>Welcome</div>
					</div>
				</div>
			</div>
		);
	}
}

const first = {
	padding: "0em 1em",
	marginLeft: "-3em",
};
const third = {
	padding: "0em 1em",
	marginLeft: "5em",
};
