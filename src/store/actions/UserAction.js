import axios from 'axios';
import {
    BASE_URL,
    USERS_GET_ALL,
    USER

} from '../../AppConsts';

export function getAllUsers() {
    return (dispatch) => {
        return axios.get(BASE_URL + "/users/getAllUsers").then(
            resp => {
                dispatch({
                    type: USERS_GET_ALL,
                    payload: resp.data
                });
            }
        )
    }
}