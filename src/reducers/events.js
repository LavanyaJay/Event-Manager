const initialState = { events: [] };
export default (state = initialState, action) => {
	switch (action.type) {
		case "EVENTS_FETCHED":
			console.log("in reducer", action.payload);
			return {
				events: action.payload
			};

		case "EVENT_CREATE_SUCCESS":
			console.log("in reducer for create event", action.payload);
			return {
				events: [...state.events, action.payload]
			};

		default:
			return state;
	}
};
