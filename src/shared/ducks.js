import "isomorphic-fetch";

// Actions
const FETCH_VEHICLES_REQUEST = "FETCH_VEHICLES_REQUEST";
const FETCH_VEHICLES_SUCCESS = "FETCH_VEHICLES_SUCCESS";
const FETCH_VEHICLES_FAILURE = "FETCH_VEHICLES_FAILURE";

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_VEHICLES_SUCCESS:
      return { ...state, vehicles: action.payload };

    default:
      return state;
  }
}

// Action Creators
const requestVehicles = () => ({ type: FETCH_VEHICLES_REQUEST });
const receivedVehicles = vehicles => ({ type: FETCH_VEHICLES_SUCCESS, payload: vehicles });
const vehiclesError = () => ({ type: FETCH_VEHICLES_FAILURE });

export const fetchVehicles = () => (dispatch, getState) => {
  dispatch(requestVehicles());
  return fetch("http://localhost:3000/api/search_vehicles")
    .then(response => response.json())
    .then(vehicles => dispatch(receivedVehicles(vehicles)))
    .catch(err => dispatch(vehiclesError(err)));
};
