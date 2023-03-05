import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTrips } from '../../store/actions/TripAction';
import { Link } from 'react-router-dom';
import cabs1 from "../../assets/cabs1.png";
import profiledb from "../../assets/profiledb.png";
import { logOut } from "../../store/actions/LoginAction";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

function AdminTrip() {
    const trips = useSelector(state => state.tripReducer.trips);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));

    useEffect(() => {
        dispatch(fetchAllTrips());
    }, [])

    const doLogout = () => {
        dispatch(logOut())
        navigate("/")
       }
       if(myuser === null){
        return <Login/>
       }
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
                <img className="card-img-top" src={cabs1} alt="Card image" style={{ width: '5%' }} />
                <ul class="navbar-nav">
                </ul>
                <span class="navbar-text" style={{ marginLeft: 500, color: 'white' }}><b>AdminDashboard</b></span>
                <Link to={`/admin/profile`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '6%',marginLeft: 400 }} /></Link>
                <button onClick={doLogout} className=" btn-light" >LogOut</button>
            </nav>
            <div className='container'>
                <div class="card-columns">{

                    trips.length > 0 &&
                    trips.map(t =>
                        <div className="card" style={{ width: '200px', marginTop: '90px' }}>
                            <div className="card bg-light" key={t.tripBookingId} style={{ width: 250 + "px" }}>
                                <div className="card-body text-center">
                                    <p className="card-text"><b>TripBooking Id </b>:{t.tripBookingId}</p>
                                    <p className="card-text"><b>From Location </b>:{t.fromLocation}</p>
                                    <p className="card-text"><b>To Location  </b>:{t.toLocation}</p>
                                    <Link to={`/trip/getById/${t.tripBookingId}`} className="btn btn-light"  style={{borderRadius:'15px'}} >View</Link>
                                    
                                </div>
                            </div>

                        </div>
                    )
                }


                </div>
            </div>
            <div><center>
                <button className="btn btn-light" style={{ marginTop: '10px' ,borderRadius:'15px'}}><Link to="/admin/dashboard">Back</Link></button></center>
            </div>
        </div>
    )
}
export default AdminTrip;