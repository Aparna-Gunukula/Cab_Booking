import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCustomer } from "../../store/actions/CustomerAction";
import "../../style/Registration.css";

function AddCustomer() {

    const [uname, setUname] = useState("");
    const [pswd, setPswd] = useState("");
    const [mobile, setMobile] = useState("");
    const [emailId, setEmailId] = useState("");
    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();

    const handleSubmit = () => {
        let errors = {};
        if (!uname) {
            errors['userNameError'] = '*This field is required';
        }
        if (!pswd) {
            errors['passwordError'] = '*This field is required';
        }
        
        if (!mobile) {
            errors['mobilenumberError'] = '*This field is required';
        }
        if (!emailId) {
            errors['emailIdError'] = '*This field is required';
        }


        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const reqPayLoad = {
                userName: uname,
                password: pswd,
                mobilenumber: mobile,
                emailId: emailId,

            }

            dispatch(addCustomer(reqPayLoad))
        }
    }

    return (
        <div className='container'><h3 style={{textDecoration:'underline' , marginTop:30}}>Registration</h3>
            <div className='form-group'>
                <label>Username</label>
                <input type="text" name="uname" value={uname}
                    onChange={event => setUname(event.target.value)} className="form-control" />
                {
                    formErrors.userNameError && <div style={{ color: 'red' }}>{formErrors.userNameError}</div>
                }
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" name="pswd" value={pswd}
                    onChange={event => setPswd(event.target.value)} className="form-control" />
                {
                    formErrors.passwordError && <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                }
            </div>
            <div className='form-group'>
                <label>Mobilenumber</label>
                <input type="number" name="mobile" value={mobile}
                    onChange={event => setMobile(event.target.value)} className="form-control" />
                {
                    formErrors.mobilenumberError && <div style={{ color: 'red' }}>{formErrors.mobilenumberError}</div>
                }
            </div>
            <div className='form-group'>
                <label>EmailId</label>
                <input type="email" name="emailId" value={emailId}
                    onChange={event => setEmailId(event.target.value)} className="form-control" />
                {
                    formErrors.emailIdError && <div style={{ color: 'red' }}>{formErrors.emailIdError}</div>
                }
            </div>
            <button onClick={handleSubmit} style={{borderRadius:15}} className=" btn-light">Register<br /></button>&nbsp;
            <button style={{borderRadius:15}} className=" btn-light" ><Link to="/">Home</Link></button>
        </div>
    )

}
export default AddCustomer;