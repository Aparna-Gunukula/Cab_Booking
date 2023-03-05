import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTrip } from "../../store/actions/TripAction";
import { Link } from 'react-router-dom';

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
                    <center>
                        <h3>Trip Details</h3>
                        <table className="table table-danger table-striped table-hover table-responsive">
                            <thead>
                                <th><b>Trip Id</b></th>
                                <th><b>From Location</b></th>
                                <th><b>To Location</b></th>
                                <th><b>From DateTime </b></th>
                                <th><b>To DateTime</b></th>
                                <th><b>Status</b></th>
                                <th><b>DistanceInKm</b></th>
                                <th><b>Bill</b></th>

                                <th><b>Customer Name</b></th>
                                <th><b>Customer Number</b></th>

                                <th><b>Driver Name </b></th>
                                <th><b>Driver Number</b></th>
                                <th></th>

                            </thead>

                            <tbody>{
                                <tr>
                                    <td>{trip.tripBookingId}</td>
                                    <td>{trip.fromLocation}</td>
                                    <td>{trip.toLocation}</td>
                                    <td>{trip.fromDateTime}</td>
                                    <td>{trip.toDateTime}</td>
                                    <td>{trip.status}</td>
                                    <td>{trip.distanceinKm}</td>
                                    <td>{trip.bill}</td>
                                    <td>{trip.customer.userName}</td>
                                    <td>{trip.customer.mobilenumber}</td>
                                    <td>{trip.driver.userName}</td>
                                    <td>{trip.driver.mobilenumber}</td>
                                    <td><Link to={`/trip/bill`} className="btn btn-light" style={{borderRadius:'15px'}} >GenerateBill</Link></td>

                                </tr>
 } </tbody>
                        </table>
                        <div>
                            
                            <button onClick={() => navigate(-1)} className="btn btn-light"  style={{borderRadius:'15px'}}>Back</button>
                        </div>
                    </center>
                </div>
            }
        </div>
    )

}
export default GetTripById