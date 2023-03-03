import React from "react";
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";

function ContactUs() {
    const navigate = useNavigate();
    return (

        <div>
            <div>
                <h2>Please contact us if you have any queries</h2>
            </div>
            <h4>Contact Details</h4>
            <p>Contact Number: 9900887766</p>
            <p>EmailId: admin@gmail.com</p>
            <div>
              <button onClick={() => navigate(-1)}>Back</button>
             </div>
        </div>
    )
}
export default ContactUs;