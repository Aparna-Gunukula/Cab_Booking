import { combineReducers } from "redux";
import cabReducer from "./CabReducer";
import tripReducer from "./TripReducer";
import loginReducer from "./LoginReducer";
import driverReducer from "./DriverReducer";
import customerReducer from "./CustomerReducer";
import userReducer from "./UserReducer";

const RootReducer = combineReducers({

    cabReducer,
    tripReducer,
    loginReducer,
    driverReducer,
    customerReducer,
    userReducer

})

export default RootReducer;