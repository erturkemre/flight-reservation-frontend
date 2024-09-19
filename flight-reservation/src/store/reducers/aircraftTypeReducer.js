import {
    FETCH_AIRCRAFT_REQUEST,
    FETCH_AIRCRAFT_SUCCESS,
    FETCH_AIRCRAFT_FAILURE,
  } from '../actions/aircraftTypeAction';
  
  const initialState = {
    loading: false,
    aircraft: [],
    error: '',
  };
  
  const aircraftTypeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_AIRCRAFT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_AIRCRAFT_SUCCESS:
        return {
          ...state,
          loading: false,
          aircraft: action.payload,
          error: '',
        };
      case FETCH_AIRCRAFT_FAILURE:
        return {
          ...state,
          loading: false,
          aircraft: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default aircraftTypeReducer;
  