import { SET_RESTAURANTS, SET_NOODLES, LOGIN, LOGOUT} from "../constant";
import { combineReducers } from "redux";
const userState = {
    userData: {},
}
const restaurantsState = {
    restaurants: [],
    loading: true
}


const usersReducer = (state = userState, action) => {
    switch (action.type) {
        case LOGIN:
            return { userData: action.payload };
        case LOGOUT:
            return { userData: action.payload };
        default:
            return state;
    }
};

const restaurantsReducer = (state = restaurantsState, action) => {
    switch (action.type) {
        case SET_RESTAURANTS:
            return {restaurants: action.payload, loading: false };
        
        default:
            return state;
    }
};


const reducers = combineReducers({
    user: usersReducer,
    restaurant: restaurantsReducer,
});
export default reducers;