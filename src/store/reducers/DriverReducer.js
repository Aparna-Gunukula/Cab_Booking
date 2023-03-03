import { DRIVER_SAVE, DRIVER_FETCH_ALL, DRIVER_FETCH_BYID, DRIVER_UPDATE, DRIVER_DELETE } from "../../AppConsts"
const initialState = {
    drivers: [],
    driver: null,
    newDriver: null,
    updateDriver: null,
    deleteDriver: null
}
export default function driverReducer(state = initialState, action) {
    if (action.type === DRIVER_FETCH_ALL) {
        return {
            ...state,
            drivers: action.payload
        }
    }
    else if (action.type === DRIVER_FETCH_BYID) {
        return {
            ...state,
            driver: action.payload

        }
    }
    else if (action.type === DRIVER_SAVE) {
        return {
            ...state,
            newDriver: action.payload

        }
    }
    else if (action.type === DRIVER_UPDATE) {
        return {
            ...state,
            updateDriver: action.payload

        }
    }
    else if (action.type === DRIVER_DELETE) {
        return {
            ...state,
            deleteDriver: action.payload

        }
    }
    else {
        return state;
    }
}