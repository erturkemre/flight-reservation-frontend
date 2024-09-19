import { combineReducers } from "redux";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";
import aircraftTypeReducer from "./aircraftTypeReducer";
import destinationReducer from "./destinationReducer";


const rootReducer = combineReducers({
    flightReducer,
    airlineReducer,
    aircraftTypeReducer,
    destinationReducer
});

export default rootReducer;