import request from "superagent";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const EVENT_FETCH_BY_ID = "EVENT_FETCH_BY_ID";
export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_DELETE_BY_ID = "EVENT_DELETE_BY_ID";

const baseUrl = "http://localhost:4000";

const eventsFetched = events => ({
	type: EVENTS_FETCHED,
	payload: events
});

const eventCreateSuccess = event => ({
	type: EVENT_CREATE_SUCCESS,
	payload: event
});

const eventFetchById = event => ({
	type: EVENT_FETCH_BY_ID,
	payload: event
});

const eventDeleteById = event => ({
	type: EVENT_DELETE_BY_ID,
	event
});

export const loadEvents = () => (dispatch, getState) => {
	// when the state already contains events, we don't fetch them again
	//if (getState().events) return;

	// a GET /events request
	request(`${baseUrl}/event`)
		.then(response => {
			console.log(response.body);
			// dispatch an EVENTS_FETCHED action that contains the events
			dispatch(eventsFetched(response.body));
		})
		.catch(console.error);
};

export const createEvent = data => dispatch => {
	request
		.post(`${baseUrl}/event`)
		.send(data)
		.then(response => {
			dispatch(eventCreateSuccess(response.body));
		})
		.catch(console.error);
};

export const loadEvent = id => (dispatch, getState) => {
	// when the state already contains events, we don't fetch them again
	//if (getState().events) return;

	// a GET /events request
	console.log("inside loadevent", id);
	request(`${baseUrl}/event/${id}`)
		.then(response => {
			console.log(response.body);
			// dispatch an EVENTS_FETCHED action that contains the events
			dispatch(eventFetchById(response.body));
		})
		.catch(console.error);
};

export const deleteEvent = id => (dispatch, getState) => {
	// when the state already contains events, we don't fetch them again
	//if (getState().events) return;

	// a GET /events request
	console.log("inside deleteevent", id);
	request(`${baseUrl}/event/${id}`)
		.then(response => {
			console.log(response.body);
			// dispatch an EVENTS_FETCHED action that contains the events
			dispatch(eventDeleteById(response.body));
		})
		.catch(console.error);
};
