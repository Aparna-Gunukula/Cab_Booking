import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/actions/LoginAction";
import { Link } from "react-router-dom";
import GetAllCabs from './GetAllCabs';
import { useParams } from "react-router-dom";
import cabs from "../assets/cabs.png";

import Footer from "./Footer";

function CustomerDashboard() {
  const navigate = useNavigate();
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const dispatch = useDispatch();

  const { userId } = useParams();
  const doLogout = () => {
    dispatch(logOut());
    navigate("/");
  }

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
          <img className="card-img-top" src={cabs} alt="Card image" style={{ width: '5%' }} />
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to={`/customer/${myuser.userId}`} class="nav-link" href="#">Your Rides</Link>
            </li>
            <li class="nav-item">
              <Link to={"/contactUs"} class="nav-link" href="#">Contact Us</Link>
            </li>
          </ul>
          <span class="navbar-text" style={{ marginLeft: 300, color: 'white' }}><b>CustomerDashboard</b></span>
          <Link to={`/`} className="btn btn-primary" style={{ marginLeft: 450 }}>Log Out</Link>
        </nav>
      </div>
      <div style={{ marginTop: '60px' }}>
        <GetAllCabs />
      </div>
      <Footer />
    </div>

  )
}
export default CustomerDashboard;