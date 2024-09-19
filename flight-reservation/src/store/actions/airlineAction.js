
import { api } from "../../api/api";

export const FETCH_AIRLINES_REQUEST = 'FETCH_AIRLINES_REQUEST';
export const FETCH_AIRLINES_SUCCESS = 'FETCH_AIRLINES_SUCCESS';
export const FETCH_AIRLINES_FAILURE = 'FETCH_AIRLINES_FAILURE';




export const fetchAirlines = () => {
    return async (dispatch) => {
      dispatch({type: FETCH_AIRLINES_REQUEST});
      try {
        const response = await api.get('/airlines');
        dispatch({type: FETCH_AIRLINES_SUCCESS, payload: response.data});
        console.log("airlines", response.data);
      } catch (error) {
        dispatch({type: FETCH_AIRLINES_FAILURE, payload: error.message});
      }
    };
  };