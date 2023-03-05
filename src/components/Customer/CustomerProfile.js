import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../../store/actions/CustomerAction";
import { useNavigate } from "react-router-dom";
import CustomerNavBar from "./CustomerNavbar";
import { Link } from "react-router-dom";


function CustomerProfile() {
    const navigate = useNavigate();

    const customer = useSelector(state => state.customerReducer.customer);
    const dispatch = useDispatch();
    const { userId } = useParams();

    useEffect(() => {
        dispatch(getCustomerById(userId));
    }, [userId])

    return (
        <div>
            {
                customer !== null &&
                <div>
                    <CustomerNavBar/>
                    <center>
                        <h1 style={{marginTop:'100px', textDecoration:'underline'}}>Your Profile</h1><hr></hr>
                        <p><b>User Id:</b> {customer.userId}</p>
                        <p><b>Name:</b> {customer.userName}</p>
                        
                        <p><b>Mobile Number:</b> {customer.mobilenumber}</p>
                        <p><b>EmailId:</b> {customer.emailId}</p>
                        <Link to={`/customer/update/${userId}`} className="btn " >Update</Link>&nbsp;&nbsp;
                        <button className="btn " style={{borderRadius:15}}  onClick={() => navigate(-1)}>Back</button>
                    </center>
                </div>
            }
              
        </div>
    )

}
export default CustomerProfile;