import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDrivers } from '../../store/actions/DriverAction';
import profile from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
import cabs1 from "../../assets/cabs1.png";
import profiledb from "../../assets/profiledb.png";
import { logOut } from "../../store/actions/LoginAction";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

function AdminDriver() {
    const drivers = useSelector(state => state.driverReducer.drivers);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));

    useEffect(() => {
        dispatch(fetchAllDrivers());
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

                    drivers.length > 0 &&
                    drivers.map(d =>
                        <div className="card" style={{ width: '280px',marginTop:'90px' }}>
                            <div className="card bg-light" key={d.userID} style={{ width: 280 + "px" }}>
                                <img className="catd-img-top" src={profile} alt="Card image" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <p className="card-text"><b>Driver Id </b>:{d.userID}</p>
                                    <p className="card-text"><b>Driver Name </b>:{d.userName}</p>
                                    
                                    <Link to={`/admin/driverbyId/${d.userID}`} className="btn"  style={{ borderRadius:15}}>View</Link>
                                    <Link to={`/admin/driver/update/${d.userID}`} className="btn" style={{ marginLeft: '5px' ,borderRadius:15}}>Update</Link>
                                    <Link to={`/driver/delete/${d.userID}`} className="btn" style={{ marginLeft: '5px',borderRadius:15 }}>Delete</Link>
                                </div>

                            </div>

                        </div>

                    )
                }
                </div>
            </div>
            <div><center style={{marginTop:'8px'}}>
                <button className="btn btn-light" style={{borderRadius:15}} ><Link to="/admin/dashboard">Back</Link></button>
                </center>
            </div>
        </div>

    )
}
export default AdminDriver;