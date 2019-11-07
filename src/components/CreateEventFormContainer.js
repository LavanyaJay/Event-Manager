import { connect } from "react-redux";
import { createEvent } from "../actions/events";
import EventForm from "./EventForm";
import React from "react";
import { Component } from "react";

class CreateEventFormContainer extends Component {
	state = {
		name: "",
		date: "",
		description: ""
	};

	onChange = event => {
		console.log("onChange");
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(this.state);
	};

	onSubmit = event => {
		event.preventDefault();
		console.log("inside submit", this.state);
		this.props.createEvent(this.state);
		this.setState({
			name: "",
			date: "",
			description: ""
		});
	};

	render() {
		console.log(this.state);
		return (
			<EventForm
				onSubmit={this.onSubmit}
				onChange={this.onChange}
				values={this.state}
			/>
		);
	}
}

export default connect(
	null,
	{ createEvent }
)(CreateEventFormContainer);
