const initialState = { event: [] };
export default (state = initialState, action) => {
	switch (action.type) {
		case "EVENT_FETCH_BY_ID":
			console.log("in reducer for fetch by id", action.payload);
			return action.payload;

		default:
			return state;
	}
};
