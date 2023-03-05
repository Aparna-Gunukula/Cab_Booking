import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../store/actions/LoginAction";
import { Link } from "react-router-dom";
import GetAllCabs from '../Cab/GetAllCabs';
import { useParams } from "react-router-dom";
import cabs1 from "../../assets/cabs1.png";
import profiledb from "../../assets/profiledb.png";

import Footer from "../Footer";
import CustomerNavBar from "./CustomerNavbar";

function CustomerDashboard() {
  const navigate = useNavigate();
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const dispatch = useDispatch();

  const { userId } = useParams();
  /* const doLogout = () => {
    if (myuser !== null) {
      localStorage.removeItem("myuser")
      alert("logged out");
      navigate("/");
    }
  } */

  return (
    <div>
      <CustomerNavBar/>
      <div style={{ marginTop: '60px' }}>
        <GetAllCabs />
      </div>
      <Footer />
    </div>

  )
}
export default CustomerDashboard;