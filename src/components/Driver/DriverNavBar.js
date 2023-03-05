import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/actions/LoginAction";
import { Link } from "react-router-dom";
import GetAllCabs from '../Cab/GetAllCabs';
import { useParams } from "react-router-dom";
import cabs1 from "../../assets/cabs1.png";
import profiledb from "../../assets/profiledb.png";


function DriverNavBar() {
  const navigate = useNavigate();
  const doLogout = () => {
    
    if (myuser !== null) {
      localStorage.removeItem("myuser")
      alert("logged out");
      navigate("/");
    }
  }
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    return(

        <div>
        <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
        <img className="card-img-top" src={cabs1} alt="Card image" style={{ width: '5%' }} />
        <ul class="navbar-nav">
          <li class="nav-item" style={{ colour: 'white' }}>
            <Link to={`/driver/getById/${myuser.userId}`} class="nav-link" href="#" style={{color:'white'}}>Rides</Link>
          </li>
          <li class="nav-item">
            <Link to={"/driver/contactUs"} class="nav-link" href="#" style={{color:'white'}}>Contact Us</Link>
          </li>
        </ul>
        <span class="navbar-text" style={{ marginLeft: 340, color: 'white' }}><b>DriverDashboard</b></span>
        {/* <Link to={`/driver/profile/${myuser.userId}`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '8%',marginLeft: 380 }}  /></Link> */}
       {/* <Link to={`/`} className="btn btn-primary" style={{ width: '8%',marginLeft: 5 }}>Log Out</Link> */}
       <button onClick={doLogout} style={{marginLeft:465}} >Log Out</button>
      </nav>
      </div>
    )
}
export default DriverNavBar;