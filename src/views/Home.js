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
				<div className="home-content">
					<p className="home-content-text">
						Great, you found my site! I will be using this website to show off my front end skills.
						I also have experience in back end technologies, but more on that later on the 'About
						me' page. This page was built solely using the{" "}
						<a href="https://reactjs.org/">React Framework</a> developed by Facebook. You can see
						the source code of this site, and many more of my projects, on the 'Projects' page. If
						you want to work with me or if you have some sort of suggestion or if you have some sort
						of question, you can contact me from the 'Contact' page.
					</p>
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
