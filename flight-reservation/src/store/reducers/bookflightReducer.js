import { BOOK_FLIGHT } from "../actions/bookflightAction";

const initialState = {
    bookedFlights: [],
};

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_FLIGHT:
            return {
                ...state,
                bookedFlights: [...state.bookedFlights, action.payload],
            };
        default:
            return state;
    }
};

export default flightReducer;