import axios from 'axios';
import { BASE_URL, DRIVER_SAVE, DRIVER_FETCH_ALL, DRIVER_FETCH_BYID, DRIVER_UPDATE, DRIVER_DELETE } from '../../AppConsts';

export function fetchAllDrivers() {
    return (dispatch) => {
        return axios.get(BASE_URL + "/driver/getAllDrivers").then(
            resp => {
                dispatch({
                    type: DRIVER_FETCH_ALL,
                    payload: resp.data
                });
            }
        )
    }
}
export function fetchDriver(userID) {
    return (dispatch) => {
        return axios.get(BASE_URL + "/driver/" + userID).then(
            resp => {
                dispatch({
                    type: DRIVER_FETCH_BYID,
                    payload: resp.data
                });
            }
        )
    }

}

export function addDriver(driver) {
    return dispatch => {
        return axios.post(BASE_URL + "/users/addDriver", driver)
            .then(resp => {
                alert("Driver Registration done");
                dispatch({
                    type: DRIVER_SAVE,
                    payload: resp.data
                });

            }
            ).catch(error => {
                alert("Registration failed");
            })
    }
}

export function updateDriver(driver) {
    return dispatch => {
        return axios.put(BASE_URL + "/driver/update/" + driver.userId, driver)
            .then(resp => {
                alert("Driver Updation done");
                dispatch({
                    type: DRIVER_UPDATE,
                    payload: resp.data
                });

            }
            ).catch(error => {
                alert("Updation failed");
            })
    }
}

export function deleteDriver(userId) {
    return dispatch => {
        return axios.delete(BASE_URL + "/users/delete/" + userId)
            .then(resp => {
                alert("Driver Deleted");
                dispatch({
                    type: DRIVER_DELETE,
                    payload: resp.data
                });

            }
            ).catch(error => {
                alert("Deletion failed");
            })
    }
}