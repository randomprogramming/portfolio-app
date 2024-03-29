import React, { Component } from "react";

export default class Links extends Component {
	render() {
		const { icon, text, isRight } = this.props;
		return (
			<div style={{ alignSelf: isRight ? "flex-end" : "flex-start" }}>
				<div className="link" style={{ flexDirection: isRight ? "row-reverse" : "initial" }}>
					<img
						className="link-img"
						src={icon}
						alt="link"
						style={{ borderColor: isRight ? "#1689FC" : "#FD003A" }}
					/>
					<div className="link-text">{text}</div>
				</div>
			</div>
		);
	}
}
