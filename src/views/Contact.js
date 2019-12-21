import React, { Component } from "react";

import "../css/Contact.css";

export default class Contact extends Component {
	onFormSubmit() {
		console.log("submited");
	}
	render() {
		return (
			<div className="contact-main-container">
				<form onSubmit={this.onFormSubmit} id="contact-form">
					<div className="contact-form">
						<div className="contact-form-email top-margin">
							<label className="text-above-field" htmlFor="text-email">
								Your email
							</label>
							<div className="text-email-container">
								<input required type="text" id="text-email" className="text-field" />
							</div>
						</div>

						<div className="contact-form-text top-margin">
							<label className="text-above-field" htmlFor="text">
								Text
							</label>
							<div className="text-container">
								<textarea form="contact-form" id="text" className="text-field" />
							</div>
						</div>

						<div className="form-submit-button top-margin">
							<input type="submit" value="tester" id="submit-button" />
						</div>
					</div>
				</form>
			</div>
		);
	}
}
