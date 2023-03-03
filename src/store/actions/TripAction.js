import axios from 'axios';
import { BASE_URL, FETCH_TRIP_ALL, FETCH_TRIP_BYID, TRIP_UPDATE, TRIP_BILL, ADD_TRIP } from '../../AppConsts';

export function fetchAllTrips() {
    return (dispatch) => {
        return axios.get(BASE_URL + "/trips/getAllTrips").then(
            resp => {
                dispatch({
                    type: FETCH_TRIP_ALL,
                    payload: resp.data
                });
            }
        )
    }
}
export function fetchTrip(tripBookingId) {
    return (dispatch) => {
        return axios.get(BASE_URL + "/trips/gettrip/" + tripBookingId).then(
            resp => {
                dispatch({
                    type: FETCH_TRIP_BYID,
                    payload: resp.data
                });
            }
        )
    }


}

export function updateTrips(trip) {
    return (dispatch) => {
        return axios.put(BASE_URL + "/trips/update/" + trip.tripBookingId, trip)
            .then(resp => {
                alert("Trip Updated");
                dispatch({
                    type: TRIP_UPDATE,
                    payload: resp.data
                });
            }
            ).catch(error => {
                alert("Update Failed");
            })
    }
}
export function addTrip(payload) {
    return (dispatch) => {
        return axios.post(BASE_URL + "/trips/addTrip", payload)
            .then(resp => {
                alert("Trip booking added");
                dispatch({
                    type: ADD_TRIP,
                    payload: resp.data

                });

            }
            ).catch(error => {
                alert("trip not saved");

            })
    }
}

export function Bills(payload) {
    return (dispatch) => {
        return axios.put(BASE_URL + "/trips/bill", payload)
            .then(resp => {
                alert("bill generated");

                dispatch({
                    type: TRIP_BILL,
                    payload: resp.data
                });
            }
            ).catch(error => {
                alert("bill not generated");
            })
    }
}