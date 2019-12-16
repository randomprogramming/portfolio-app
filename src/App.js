import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import { Navbar } from "./components/Navbar";

export default class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/about" component={AboutMe}></Route>
					<Route exact path="/projects" component={Projects}></Route>
					<Route exact path="/contact" component={Contact}></Route>
				</Switch>
			</Router>
		);
	}
}
