import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomerById, updateCustomer } from '../store/actions/CustomerAction';


function UpdateCustomer() {
    const customer = useSelector(state => state.customerReducer.customer);
    const dispatch = useDispatch();

    const [cId, setCId] = useState("");
    const [uname, setUname] = useState("");
    const [pswd, setPswd] = useState("");
    const [mobile, setMobile] = useState("");
    const [emailId, setEmailId] = useState("");

    const { cUserId } = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        dispatch(getCustomerById(cUserId))
    }, [dispatch, cUserId])

    //prepopulate the form data
    useEffect(() => {
        if (customer) {
            setCId(customer.userId);
            setUname(customer.userName);
            setPswd(customer.password);
            setMobile(customer.mobilenumber);
            setEmailId(customer.emailId)


        };
    }, [customer])


    // update customer details
    const UpdateCustomer = () => {
        const payload = {
            userId: cUserId,
            userName: uname,
            password: pswd,
            mobilenumber: mobile,
            emailId: emailId
        }
        dispatch(updateCustomer(payload))
    }
    return (
        <div className='container'>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="uname" value={uname}
                    onChange={event => setUname(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="pswd" value={pswd}
                    onChange={event => setPswd(event.target.value)} />
            </div>
            <div className="form-group">
                <label>Mobilenumber</label>
                <input type="text" name="mobile" value={mobile}
                    onChange={event => setMobile(event.target.value)} />
            </div>
            <div className="form-group">
                <label>EmailId</label>
                <input type="text" name="emailId" value={emailId}
                    onChange={event => setEmailId(event.target.value)} />
            </div>
            <button onClick={UpdateCustomer}>Save</button>

        </div>
    )


}
export default UpdateCustomer;