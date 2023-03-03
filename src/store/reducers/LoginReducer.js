import React from "react";
import {
    BASE_URL,
    LOGIN,
    LOGOUT
} from "../../AppConsts"

const initialState = {
    loggedInUser: false
}

export default function loginReducer(state = initialState, action) {
    if (action.type === LOGIN) {
        const user = action.payload;
        const myObj = {
            userId: user.userId,
            emailId: user.emailId,
            dtype: user.dtype
        }
        localStorage.setItem("myuser", JSON.stringify(myObj));
        return {
            ...state,
            loggedInUser: myObj
        }
    }
    else if (action.payload === LOGOUT) {
        return {
            ...state,
            loggedInUser: null
        }
    }
    else {
        return state;
    }

}