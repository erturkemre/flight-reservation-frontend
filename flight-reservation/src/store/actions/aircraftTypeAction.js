import { api } from "../../api/api";

export const FETCH_AIRCRAFT_REQUEST = 'FETCH_AIRCRAFT_REQUEST';
export const FETCH_AIRCRAFT_SUCCESS = 'FETCH_AIRCRAFT_SUCCESS';
export const FETCH_AIRCRAFT_FAILURE = 'FETCH_AIRCRAFT_FAILURE';


export const fetchAircraft = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_AIRCRAFT_REQUEST });
  
      try {
        console.log("API isteği başlatılıyor...");
        const response = await api.get('/aircraft-types');
  
        dispatch({ type: FETCH_AIRCRAFT_SUCCESS, payload: response.data });
        console.log("aircrafts", response.data);
      } catch (error) {
        dispatch({ type: FETCH_AIRCRAFT_FAILURE, payload: error.message });
        console.log("error", error.message);
      }
    };
  };