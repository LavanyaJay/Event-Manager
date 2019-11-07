import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventList";
import CreateEventFormContainer from "./CreateEventFormContainer";
class EventsListContainer extends React.Component {
	componentDidMount() {
		console.log("in didmount");
		this.props.loadEvents();
	}

	render() {
		return (
			<div>
				<EventsList events={this.props.events} />
				<CreateEventFormContainer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state.events);
	return {
		events: state.events.events
	};
};

export default connect(
	mapStateToProps,
	{ loadEvents }
)(EventsListContainer);
