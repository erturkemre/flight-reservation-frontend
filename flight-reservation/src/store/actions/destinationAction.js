  import {api} from '../../api/api';

  export const FETCH_DESTINATIONS_REQUEST = 'FETCH_DESTINATIONS_REQUEST';
    export const FETCH_DESTINATIONS_SUCCESS = 'FETCH_DESTINATIONS_SUCCESS';
    export const FETCH_DESTINATIONS_FAILURE = 'FETCH_DESTINATIONS_FAILURE';
  
  export const fetchDestinations = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_DESTINATIONS_REQUEST });
  
      try {
        console.log("API isteği başlatılıyor...");
        const response = await api.get('/destinations');
  
        dispatch({ type: FETCH_DESTINATIONS_SUCCESS, payload: response.data });
        console.log("destinations", response.data);
      } catch (error) {
        dispatch({ type: FETCH_DESTINATIONS_FAILURE, payload: error.message });
        console.log("error", error.message);
      }
    };
  };
  