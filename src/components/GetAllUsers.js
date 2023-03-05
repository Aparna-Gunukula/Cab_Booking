import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../store/actions/UserAction';
import profiledb from '../assets/profiledb.png';
import { Link } from 'react-router-dom';
import { logOut } from "../store/actions/LoginAction";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import cabs1 from "../assets/cabs1.png";
import profile from '../assets/profile.jpg';

function GetAllUsers() {
    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    const doLogout = () => {
        dispatch(logOut())
        navigate("/")
    }
    if (myuser === null) {
        return <Login />
    }
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
                <img className="card-img-top" src={cabs1} alt="Card image" style={{ width: '5%' }} />
                <ul class="navbar-nav">
                </ul>
                <span class="navbar-text" style={{ marginLeft: 500, color: 'white' }}><b>AdminDashboard</b></span>
                <Link to={`/admin/profile`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '6%', marginLeft: 410 }} /></Link>

                <button onClick={doLogout} className=" btn-light" >LogOut</button>
            </nav>
            <div className='container' style={{ marginTop: 60 }}>
                <div className="card-columns">{

                    users.length > 0 &&
                    users.map(d =>
                        <div className="card" style={{ width: '200px' }}>
                            <div className="card bg-light" key={d.userId} style={{ width: 250 + "px" }}>
                                <img className="catd-img-top" src={profile} alt="Card image" style={{ width: '75%' }} />
                                <div className="card-body text-center">
                                    <p className="card-text"><b>User Id</b>: {d.userId}</p>
                                    <p className="card-text"><b>D Type</b>: {d.dtype}</p>
                                    <p className="card-text"><b>User Name</b>: {d.userName}</p>
                                    <p className="card-text"><b>Number</b>: {d.mobilenumber}</p>
                                    <p className="card-text"><b>EmailId</b>: {d.emailId}</p>
                                </div>
                            </div>
                        </div>
                    )
                }


                </div>
            </div>
            <div><center>
                <button className="btn btn-light" style={{ borderRadius: 15,marginTop:10 }} onClick={() => navigate(-1)}>Back</button>
            </center></div>
        </div>


    )
}
export default GetAllUsers;