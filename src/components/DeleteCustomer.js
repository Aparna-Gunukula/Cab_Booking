import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerById, deleteCustomer } from "../store/actions/CustomerAction";

function DeleteCustomer() {
    const { userId } = useParams();
    const customer = useSelector(state => state.customerReducer.customer);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getCustomerById(userId))
    }, [dispatch, userId])

    const handleDelete = () => {
        dispatch(deleteCustomer(userId))
            .then(resp => {
                alert(resp.data);
                navigate("/customer/getAll");
            });
    }
    return (
        <div>
            {
                customer !== null &&
                <div>
                    <center>
                        <h1>Customer Details</h1>
                        <p><b>CustomerId:</b> {customer.userId}</p>
                        <p><b>CustomerName:</b> {customer.userName}</p>
                        <p><b>CustomerMobileNumber:</b> {customer.mobilenumber}</p>
                        <p><b>CustomerEmailId:</b> {customer.emailId}</p>

                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={() => navigate(-1)}>Cancel</button>
                    </center>
                </div>
            }

        </div>
    )
}
export default DeleteCustomer;