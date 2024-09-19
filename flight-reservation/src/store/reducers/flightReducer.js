import { FETCH_FLIGHTS_REQUEST, FETCH_FLIGHTS_SUCCESS, FETCH_FLIGHTS_FAILURE } from '../actions/flightAction';

const initialState = {
  loading: false,
  flights: [],
  error: ''
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_FLIGHTS_SUCCESS:
      return { ...state, loading: false, flights: action.payload };
    case FETCH_FLIGHTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default flightsReducer;
