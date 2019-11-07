import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails.js";
import { loadEvent, updateEvent, deleteEvent } from "../actions/events";

class EventDetailsContainer extends React.Component {
	componentDidMount() {
		console.log("mounting", this.props.match.params.id);
		const id = this.props.match.params.id;
		this.props.loadEvent(id);
	}

	onDelete = () => {
		this.props.deleteEvent(this.props.event.id);
		this.props.history.push("/");
	};

	render() {
		return <EventDetails event={this.props.event} onDelete={this.onDelete} />;
	}
}

const mapStateToProps = state => {
	console.log("DetailsContainer:", state.event.event);
	return {
		event: state.event.event
	};
};

export default connect(
	mapStateToProps,
	{ loadEvent }
)(EventDetailsContainer);
