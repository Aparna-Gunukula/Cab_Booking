import {

    CAB_FETCH_ALL,
    CAB_FETCH_BY_ID,
    CAB_SAVE,
    CAB_UPDATE,
    CAB_DELETE
} from '../../AppConsts';

const initialState = {
    cabs: [],
    cab: null,
    newCab: null,
    updatedCab: null,
    deleteCab: null

}

export default function CabReducer(state = initialState, action) {
    if (action.type === CAB_FETCH_ALL) {
        return {
            ...state,
            cabs: action.payload
        }
    }
    else if (action.type === CAB_FETCH_BY_ID) {
        return {
            ...state,
            cab: action.payload
        }
    }
    else if (action.type === CAB_SAVE) {
        return {
            ...state,
            newCab: action.payload
        }
    }
    else if (action.type === CAB_UPDATE) {
        return {
            ...state,
            updatedCab: action.payload
        }
    }
    else if (action.type === CAB_DELETE) {
        return {
            ...state,
            deleteCab: action.payload
        }
    }
    else {
        return state;
    }
}