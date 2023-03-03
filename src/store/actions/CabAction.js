import axios from 'axios';
import {
    BASE_URL,
    CAB_FETCH_ALL,
    CAB_FETCH_BY_ID,
    CAB_SAVE,
    CAB_UPDATE,
    CAB_DELETE
} from '../../AppConsts';

export function ViewAllCabs() {
    return (dispatch) => {
        return axios.get(BASE_URL + "/cabs/viewAllCabs").then(
            resp => {
                dispatch({
                    type: CAB_FETCH_ALL,
                    payload: resp.data
                });
            }
        )
    }
}

export function ViewCabById(cabId) {
    return (dispatch) => {
        return axios.get(BASE_URL + "/cabs/view/" + cabId)
            .then(resp => {
                dispatch({
                    type: CAB_FETCH_BY_ID,
                    payload: resp.data
                });
            }
            )
    }
}

export function addCab(cab) {
    return dispatch => {
        return axios.post(BASE_URL + "/cabs/addCab", cab)
            .then(resp => {
                alert("Cab Saved");
                dispatch({
                    type: CAB_SAVE,
                    payload: resp.data
                });
            })
            .catch(error => {
                alert("Cab Not Saved");
            })
    }
}

export function updateCab(cab) {
    return dispatch => {
        return axios.put(BASE_URL + "/cabs/updateCab/" + cab.cabId, cab)
            .then(resp => {
                alert("Cab Updated")
                dispatch({
                    type: CAB_UPDATE,
                    payload: resp.data
                });
            })
            .catch(error => {
                alert("Cab Not Updated");
            })
    }
}

export function deleteCab(cabId) {
    return dispatch => {
        return axios.delete(BASE_URL + "/cabs/cancel/" + cabId)
            .then(resp => {
                alert("Cab Deleted")
                dispatch({
                    type: CAB_DELETE,
                    payload: resp.data
                });
            })

    }
}