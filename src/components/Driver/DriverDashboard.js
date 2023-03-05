import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import profiledb from "../../assets/profiledb.png";
import DriverNavBar from "./DriverNavBar";
import DriverProfile from "./DriverProfile";


function DriverDashboard() {
  const navigate = useNavigate();
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const driver = useSelector(state => state.driverReducer.driver);
  const { userId } = useParams();
 
  return (
    <div>
      <DriverNavBar/>
        <div style={{marginTop:'100px'}}>
        <DriverProfile/>
        </div>
        <div style={{marginTop:55}}>
        <Footer />
      </div></div>
    

  )
}
export default DriverDashboard;