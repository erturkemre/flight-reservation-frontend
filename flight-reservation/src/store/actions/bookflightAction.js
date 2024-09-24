
import { api } from "../../api/api";

export const BOOK_FLIGHT = "BOOK_FLIGHT";

export const bookFlightToDb = (flight,userId) => async (dispatch) => {
    try {
        console.log('flight:',flight);
        const response = await api.post('/reservations', {flight ,userId});
        dispatch({
            type: BOOK_FLIGHT,
            payload: response.data,
        });
        return response.data;
    } catch (error) {
        console.error(`Error booking flight: ${error.message}`);
        throw new Error(`Error booking flight: ${error.message}`);
    }
};


export const getFlightReservations = () => async (dispatch) => {
    try {
        const response = await api.get('/reservations');
        dispatch({
            type: BOOK_FLIGHT,
            payload: response.data, 
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching reservations: ${error.message}`);
        throw new Error(`Error fetching reservations: ${error.message}`);
    }
};
