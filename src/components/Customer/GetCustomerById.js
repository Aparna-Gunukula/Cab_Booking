import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../../store/actions/CustomerAction";
import { Link } from 'react-router-dom';
import CustomerNavBar from "./CustomerNavbar";


function GetCustomerById() {
    const customer = useSelector(state => state.customerReducer.customer);
    const dispatch = useDispatch();
    const { userId } = useParams();
    // const trip.status = Completed;
    // const [status,setStatus] = useState('');
    
    useEffect(() => {
        dispatch(getCustomerById(userId));
    }, [userId])

    return (
        <div>
            <CustomerNavBar/>
            {
                customer !== null &&
                <div>
                    <center>
                        <h3>Trip Details</h3>
                        {/* <p><b>CustomerId:</b> {customer.userId}</p>
                        <p><b>CustomerName:</b> {customer.userName}</p>
                        <p><b>Password:</b> {customer.password}</p>
                        <p><b>Mobile Number:</b> {customer.mobilenumber}</p>
                        <p><b>EmailId:</b> {customer.emailId}</p> */}
                        
                             <div style={{marginTop:'50px'}}>
                                <table className="table table-danger table-striped table-hover table-responsive">
                                    <thead>
                                        <th><b>TripBooking Id</b></th>
                                        <th><b>From Location</b></th>
                                        <th><b>To Location</b></th>
                                        <th><b>From DateTime </b></th>
                                        <th><b>To DateTime </b></th>
                                        <th><b>Status</b></th>
                                        <th><b>DistanceInKm</b></th>
                                        <th><b>Bill</b></th>
                                        <th><b></b></th>
                                    </thead>
                                    <tbody>{customer.trips.length > 0 &&
                            customer.trips.map(trip =>
                                        <tr key={trip.tripBookingId}>
                                            <td>{trip.tripBookingId}</td>
                                            <td>{trip.fromLocation}</td>
                                            <td>{trip.toLocation}</td>
                                            <td>{trip.fromDateTime}</td>
                                            <td>{trip.toDateTime}</td>
                                            <td>{trip.status}</td>
                                            <td>{trip.distanceinKm}</td>
                                            <td>{trip.bill}</td>
                                            
                                            <td><Link to={`/trip/update/${trip.tripBookingId}`} className="btn" style={{borderRadius:15}} /* disabled={trip.status ? 'Completed' : 'Requested' } */ >Cancel</Link></td>
                                                                                                                                 
                                        </tr>)
                                    }</tbody>
                                </table>
                            </div>

                        
                    </center>
                </div>
}
            <div><center>
                <button className="btn btn-light" style={{borderRadius:15}}><Link to="/customer/dashboard"> Back</Link></button></center>
            </div></div>
    )

}
export default GetCustomerById;