import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";

export default class App extends Component {
	render() {
		return (
			// This is the router which renders the correct component depending
			// on the current url. The user can click on any of the Links in the Navbar
			<Router>
				<Navbar />
				{/* The height of the NavBar is 4rem, so we have to offset
				the whole page by 4rem, so that things don't appear
				under the NavBar */}
				<div className="content-container" style={{ marginTop: "4rem" }}>
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/about" component={AboutMe}></Route>
						<Route exact path="/projects" component={Projects}></Route>
						<Route exact path="/contact" component={Contact}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
