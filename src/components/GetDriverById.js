import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDriver } from "../store/actions/DriverAction";

function GetDriverById() {
    const driver = useSelector(state => state.driverReducer.driver);
    const dispatch = useDispatch();
    const { userID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchDriver(userID));
    }, [userID])

    return (
        <div>
            {
                driver !== null &&
                <div>
                    <center>
                        <h1>Trip Details</h1>
                        {/* <p><b>DriverId:</b> {driver.userID}</p>
                        <p><b>DriverName:</b> {driver.userName}</p>
                        <p><b>Password:</b> {driver.password}</p>
                        <p><b>Mobile Number:</b> {driver.mobilenumber}</p>
                        <p><b>EmailId:</b> {driver.emailId}</p>
                        <p><b>Rating:</b> {driver.rating}</p>
                        <p><b>LicenseNo:</b> {driver.licenseNo}</p>
                        <p><b>Location:</b> {driver.location}</p> */}
                        {
                            driver.trips.length > 0 &&
                            driver.trips.map(trip => <div>
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
                        <div>
                            <button onClick={() => navigate(-1)}>Back</button>
                        </div>
                    </center>

                </div>
            }
        </div>
    )

}
export default GetDriverById;