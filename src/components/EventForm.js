import React from "react";

export default function EventForm(props) {
	return (
		<div>
			<form onSubmit={event => props.onSubmit(event)}>
				<label>EventName:</label>
				<input
					name="name"
					onChange={props.onChange}
					defaultValue={props.values.name}
				/>
				<label>Date:</label>
				<input
					name="date"
					onChange={props.onChange}
					defaultValue={props.values.date}
				/>
				<label>Description:</label>
				<input
					name="description"
					onChange={props.onChange}
					defaultValue={props.values.description}
				/>
				<input type="submit" value="AddEvent" />
			</form>
		</div>
	);
}
