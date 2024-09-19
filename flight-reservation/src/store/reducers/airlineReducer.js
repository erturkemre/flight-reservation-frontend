import { FETCH_AIRLINES_REQUEST, FETCH_AIRLINES_SUCCESS, FETCH_AIRLINES_FAILURE } from '../actions/airlineAction';

const initialState = {
  loading: false,
  airlines: [],
  error: ''
};

const airlinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AIRLINES_REQUEST:
      return { ...state, loading: true };
    case FETCH_AIRLINES_SUCCESS:
      return { ...state, loading: false, airlines: action.payload };
    case FETCH_AIRLINES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default airlinesReducer;
