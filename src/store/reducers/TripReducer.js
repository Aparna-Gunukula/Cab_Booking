import { FETCH_TRIP_ALL, FETCH_TRIP_BYID, TRIP_UPDATE, TRIP_BILL, ADD_TRIP } from "../../AppConsts";

const initialState = {
    trips: [],
    trip: null,
    updateTrip: null
}
export default function tripReducer(state = initialState, action) {
    if (action.type === FETCH_TRIP_ALL) {
        return {
            ...state,
            trips: action.payload
        }
    }
    else if (action.type === FETCH_TRIP_BYID) {
        return {
            ...state,
            trip: action.payload

        }
    }

    else if (action.type === TRIP_UPDATE) {
        return {
            ...state,
            updateTrip: action.payload

        }
    }

    if (action.type === ADD_TRIP) {
        return {
            ...state,
            trip: action.payload

        }
    }

    else if (action.type === TRIP_BILL) {
        return {
            ...state,
            trip: action.payload

        }
    }
    else {
        return state;
    }
}