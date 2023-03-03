import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { fetchTrip } from "../store/actions/TripAction";

function GetTripById() {
    const trip = useSelector(state => state.tripReducer.trip);
    const dispatch = useDispatch();
    const { tripBookingId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchTrip(tripBookingId));
    }, [tripBookingId])

    return (
        <div>
            {
                trip !== null &&
                <div>
                    <h5>Trip Details</h5>
                    <p>TripBooking Id:{trip.tripBookingId}</p>
                    <p>From Location:{trip.fromLocation}</p>
                    <p>To Location:{trip.toLocation}</p>
                    <p>From DateTime :{trip.fromDateTime}</p>
                    <p>To DateTime:{trip.toDateTime}</p>
                    <p>Status:{trip.status}</p>
                    <p>DistanceInKm:{trip.distanceinKm}</p>
                    <p>Bill:{trip.bill}</p>
                    <h5>Customer Details</h5>
                    <p>Id:{trip.customer.userId}</p>
                    <p>Name:{trip.customer.userName}</p>
                    <p>MobileNumber:{trip.customer.mobilenumber}</p>
                    <p>EmailId:{trip.customer.emailId}</p>
                    <h5>Driver Details</h5>
                    <p>DriverId: {trip.driver.userId}</p>
                    <p>UserName: {trip.driver.userName}</p>
                    <p>MobileNumber: {trip.driver.mobilenumber}</p>
                    <p>EmailId: {trip.driver.emailId}</p>
                    <p>location: {trip.driver.location}</p>
                    <p>Rating: {trip.driver.rating}</p>

                    <div>
                        <button onClick={() => navigate(-1)}>Back</button>
                    </div>

                </div>
            }
        </div>
    )

}
export default GetTripById;