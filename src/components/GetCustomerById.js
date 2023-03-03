import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../store/actions/CustomerAction";

function GetCustomerById() {
    const customer = useSelector(state => state.customerReducer.customer);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(getCustomerById(userId));
    }, [userId])

    return (
        <div>
            {
                customer !== null &&
                <div>
                    <center>
                        <h1>Trip Details</h1>
                        {/* <p><b>CustomerId:</b> {customer.userId}</p>
                        <p><b>CustomerName:</b> {customer.userName}</p>
                        <p><b>Password:</b> {customer.password}</p>
                        <p><b>Mobile Number:</b> {customer.mobilenumber}</p>
                        <p><b>EmailId:</b> {customer.emailId}</p> */}
                        {
                            customer.trips.length > 0 &&
                            customer.trips.map(trip => <div>
                                <p>TripBooking Id:{trip.tripBookingId}</p>
                                <p>From Location:{trip.fromLocation}</p>
                                <p>To Location:{trip.toLocation}</p>
                                <p>From DateTime :{trip.fromDateTime}</p>
                                <p>To DateTime:{trip.toDateTime}</p>
                                <p>Status:{trip.status}</p>
                                <p>DistanceInKm:{trip.distanceinKm}</p>
                                <p>Bill:{trip.bill}</p>
                            </div>)

                        }
                    </center>
                </div>
            }
        </div>
    )

}
export default GetCustomerById;