import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function EventDetails(props) {
	return (
		<div>
			<h1>{props.event.name}</h1>
			Date: {props.event.date}
			<p>Description: {props.event.description}</p>
			<button>Delete</button>
		</div>
	);
}
