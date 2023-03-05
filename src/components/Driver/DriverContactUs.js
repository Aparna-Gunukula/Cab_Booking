import React from "react";
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import DriverNavBar from "./DriverNavBar";


function DriverContactUs() {
    const navigate = useNavigate();
    return (

        <div style={{marginTop:'90px'}}>
            <DriverNavBar/>
                <center>
            <div>
                <h2 style={{marginTop:'50px'}}>Please contact us if you have any queries</h2><hr/>
            </div>
           
            <p><b>Name:</b> Admin</p>
            <p><b>Contact Number:</b> 9900887766</p>
            <p><b>EmailId:</b> admin@gmail.com</p>
            <div>
              <button className="btn btn-light" style={{borderRadius:15}}  onClick={() => navigate(-1)}>Back</button>
             </div></center>
        </div>
    )
}
export default DriverContactUs;