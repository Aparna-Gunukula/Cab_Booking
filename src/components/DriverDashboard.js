import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import cabs from "../assets/cabs.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function DriverDashboard() {
  const navigate = useNavigate();
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const driver = useSelector(state => state.driverReducer.driver);
  const { userId } = useParams();
  const doLogout = () => {
    if (myuser !== null) {
      localStorage.removeItem("myuser")
      alert("logged out");
      navigate("/");
    }
  }
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
        <img className="card-img-top" src={cabs} alt="Card image" style={{ width: '5%' }} />
        <ul class="navbar-nav">
          <li class="nav-item" style={{ colour: 'white' }}>
            <Link to={`/driver/getById/${myuser.userId}`} class="nav-link" href="#" >Your Rides</Link>
          </li>
          <li class="nav-item">
            <Link to={"/contactUs"} class="nav-link" href="#">Contact Us</Link>
          </li>
        </ul>
        <span class="navbar-text" style={{ marginLeft: 300, color: 'white' }}><b>DriverDashboard</b></span>
        <Link to={`/`} className="btn btn-primary" style={{ marginLeft: 450 }}>Log Out</Link>
      </nav>
      <div style={{ marginTop: '60px' }}>
        <div>
          {
            driver !== null &&
            <div>
              <center>
                <h1>Cab Details</h1>
                <p>CabId: {driver.cabbean.cabId}</p>
                    <p>CabNo: {driver.cabbean.cabNo}</p>
                    <p>CabType: {driver.cabbean.cartype}</p>
                    <p>CabName: {driver.cabbean.cabName}</p>
                    <p>PerKmRate: {driver.cabbean.perKmRate}</p>
              </center>
            </div>
          }
        </div>
        <Footer />
      </div>
    </div>

  )
}
export default DriverDashboard;