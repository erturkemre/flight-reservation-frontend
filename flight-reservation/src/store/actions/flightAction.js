import { api } from '../../api/api';

export const FETCH_FLIGHTS_REQUEST = 'FETCH_FLIGHTS_REQUEST';
export const FETCH_FLIGHTS_SUCCESS = 'FETCH_FLIGHTS_SUCCESS';
export const FETCH_FLIGHTS_FAILURE = 'FETCH_FLIGHTS_FAILURE';

export const fetchFlights = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FLIGHTS_REQUEST });

    try {
      console.log("API isteği başlatılıyor...");
      const response = await api.get('/flights');
      
      dispatch({ type: FETCH_FLIGHTS_SUCCESS, payload: response.data });
      console.log("flights", response.data);
    } catch (error) {
      dispatch({ type: FETCH_FLIGHTS_FAILURE, payload: error.message });
      console.log("error", error.message);
    }
  };
};
