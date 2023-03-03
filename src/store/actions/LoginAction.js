import axios from 'axios';
import {
    BASE_URL,
    LOGIN,
    LOGOUT
} from "../../AppConsts"

export function login(loggedInUser) {
    return dispatch => {
        return axios.post(BASE_URL + "/auth/login", loggedInUser)
            .then(resp => {
                alert("Login Successful");
                dispatch({
                    type: LOGIN,
                    payload: resp.data
                })
            }).catch(error => {
                alert(error.response.data);
            })

    }

}
export function logOut() {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (myuser !== null) {
        localStorage.removeItem("myuser")
        return {
            type: LOGOUT
        }
    }
}