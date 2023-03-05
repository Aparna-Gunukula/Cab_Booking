import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/actions/LoginAction";
import { Link } from "react-router-dom";
import GetAllCabs from '../Cab/GetAllCabs';
import { useParams } from "react-router-dom";
import cabs1 from "../../assets/cabs1.png";
import profiledb from "../../assets/profiledb.png";


function CustomerNavBar() {
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
            <li class="nav-item">
              <Link to={`/customer/${myuser.userId}`} class="nav-link" href="#"style={{color:'white'}} >Rides</Link>
            </li>
            <li class="nav-item">
              <Link to={"/contactUs"} class="nav-link" href="#" style={{color:'white'}}>ContactUs</Link>
            </li>
          </ul>
          <span class="navbar-text" style={{ marginLeft: 350, color: 'white' }}><b>CustomerDashboard</b></span>
          <Link to={`/customer/profile/${myuser.userId}`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '6%' ,marginLeft: 385 }}  /></Link>
        
          <button onClick={doLogout} >LogOut</button>
        </nav>
      </div>
    )
}
export default CustomerNavBar;