import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function EventList(props) {
	return (
		<div>
			<ul>
				{props.events.map(event => {
					console.log("EventsList:", event);
					return (
						<div>
							<li>
								<Link to={`/event/${event.id}`}>{event.name}</Link>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
