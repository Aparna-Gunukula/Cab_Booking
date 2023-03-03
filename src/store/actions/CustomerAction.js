import axios from 'axios';
import {
    BASE_URL,
    CUSTOMERS_GET_ALL,
    CUSTOMER,
    CUSTOMER_SAVE,
    CUSTOMER_UPDATE,
    CUSTOMER_DELETE
} from '../../AppConsts';


export function getAllCustomers() {
    return (dispatch) => {
        return axios.get(BASE_URL + "/customer/getAllCustomers").then(
            resp => {
                dispatch({
                    type: CUSTOMERS_GET_ALL,
                    payload: resp.data
                });
            }
        )
    }
}
export function getCustomerById(userId) {
    return (dispatch) => {
        return axios.get(BASE_URL + "/customer/" + userId).then(
            resp => {
                dispatch({
                    type: CUSTOMER,
                    payload: resp.data
                });
            }
        )
    }
}
export function addCustomer(customer) {

    return dispatch => {
        return axios.post(BASE_URL + "/users/addCustomer", customer)
            .then(resp => {
                alert("Customer Regestration done.");
                dispatch({
                    type: CUSTOMER_SAVE,
                    payload: resp.data
                })
            }
            ).catch(error => {
                alert("Registration Failed.");
            })
    }
}
export function updateCustomer(customer) {
    return dispatch => {
        return axios.put(BASE_URL + "/users/update/" + customer.userId, customer)
            .then(resp => {
                alert("Customer Updated");
                dispatch({
                    type: CUSTOMER_UPDATE,
                    payload: resp.data
                })
            }
            ).catch(error => {
                alert("Failed to Update Customer");
            })
    }
}
export function deleteCustomer(userId) {
    return dispatch => {
        return axios.delete(BASE_URL + "/users/delete/" + userId)
            .then(resp => {
                alert("Customer deleted");
                dispatch({
                    type: CUSTOMER_DELETE,
                    payload: resp.data
                })
            }
            ).catch(error => {
                alert("Failed to delete Customer");
            })
    }
}