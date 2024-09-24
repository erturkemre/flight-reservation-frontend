import { combineReducers } from "redux";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";
import aircraftTypeReducer from "./aircraftTypeReducer";
import destinationReducer from "./destinationReducer";
import bookflightReducer from "./bookflightReducer";

const rootReducer = combineReducers({
    flightReducer,
    airlineReducer,
    aircraftTypeReducer,
    destinationReducer,
    bookflightReducer
});

export default rootReducer;