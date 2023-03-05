import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDriver } from "../../store/actions/DriverAction";
import DriverNavBar from "./DriverNavBar";

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
            <DriverNavBar />
            {
                driver !== null &&
                <div style={{ marginTop: 80 }}>
                    <center>
                        <h2 style={{ color: "black" ,marginBottom:20}}>Trip Details</h2>

                        {
                            driver.trips.length > 0 &&
                            driver.trips.map(trip => <div>
                                <table className="table table-danger table-striped table-hover table-responsive ">
                                    <thead>
                                        <th><b>TripBooking Id</b></th>
                                        <th><b>From Location</b></th>
                                        <th><b>To Location</b></th>
                                        <th><b>From DateTime </b></th>
                                        <th><b>To DateTime</b></th>
                                        <th><b>Status</b></th>
                                        <th><b>DistanceInKm</b></th>
                                        <th><b>Bill</b></th>                                        <th></th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{trip.tripBookingId}</td>
                                            <td>{trip.fromLocation}</td>
                                            <td>{trip.toLocation}</td>
                                            <td>{trip.fromDateTime}</td>
                                            <td>{trip.toDateTime}</td>
                                            <td>{trip.status}</td>
                                            <td>{trip.distanceinKm}</td>
                                            <td>{trip.bill}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>)

                        }
                        <div>
                            <button onClick={() => navigate(-1)} style={{ borderRadius: 15 }} className="btn" >Back</button>
                        </div>
                    </center>

                </div>
            }
        </div>
    )

}
export default GetDriverById;