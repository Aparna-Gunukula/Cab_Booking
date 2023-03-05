import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/Registration.css";

function AdminProfile() {
    const navigate = useNavigate();
    return (
        
        <div>
            {/* <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
                <img className="card-img-top" src={cabs} alt="Card image" style={{ width: '5%' }} />
                <ul class="navbar-nav">
                </ul>
                <span class="navbar-text" style={{ marginLeft: 500, color: 'white' }}><b>AdminDashboard</b></span>
                <Link to={`/admin/profile`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '8%',marginLeft: 380 }} /></Link> */}
                {/* <Link to={`/`} className="btn btn-primary" style={{ width: '8%', marginLeft: 5}}>Log Out</Link> */}
                {/* <button onClick={doLogout} >Log Out</button>
            </nav> */}
            <div>
            <center>
        <h1 style={{marginTop:'50px', textDecoration: 'underline'}}><b>Your Profile</b></h1>
        <hr></hr>
                <p><b>User Id</b>  :  500</p>
                    <p><b>Name</b>  :  Admin</p>
                    <p><b>Email Address</b>  :  admin@gmail.com</p>
                    <p><b>Mobile Number</b>  :  9900887766</p>
                
      
        <button onClick={() => navigate(-1)} className="btn " style={{marginTop:'10px'}}>Back</button>
        </center>
        </div>
        </div>
    )

}

export default AdminProfile;