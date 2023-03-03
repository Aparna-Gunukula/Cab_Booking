import React, { useState } from "react";
//import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/LoginAction";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import cab1 from "../assets/cab1.jpg";
import pic from "../assets/pic.png"

function Login() {
    const [uname, setUname] = useState('');
    const [upwd, setUpwd] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const loggedInUser = useSelector(state => state.loginReducer.loggedInUser);
    const dispatch = useDispatch();


    const doLogin = () => {
        let errors = {};
        if (!uname) {
            errors['userNameError'] = "Username is required";
        }
        if (!upwd) {
            errors['passwordError'] = "Password is required";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const payload = {
                userName: uname,
                password: upwd
            }
            dispatch(login(payload))
        }
    }
    return (
        <div>
            {
                loggedInUser !== null &&
                    loggedInUser.dtype === 'Driver' ?
                    navigate("/driver/dashboard") :
                    loggedInUser.dtype === 'Customer' ?
                        navigate("/customer/dashboard") :
                        loggedInUser.dtype === 'Admin' ?
                            navigate("/admin/dashboard") :

                            <div>
                                <img className="card-img-top" src={cab1} alt="Card image" style={{ width: '40%', marginTop: '10px' }} />
                                <img className="card-img-top" src={pic} alt="Card image" style={{ width: '10%', marginLeft: '450px', marginBottom: '190px'  }} />
                                <div style={{ marginLeft: '900px', marginTop: '-180px'  }}>
                                    <div>
                                        <label>UserName </label>
                                        <input type="text" name="uname" value={uname}
                                            onChange={event => setUname(event.target.value)} />
                                        {
                                            formErrors.userNameError && <div style={{ color: 'red' }}>{formErrors.userNameError}</div>
                                        }
                                    </div>
                                    <div>
                                        <label>Password </label>
                                        <input type="password" name="upwd" value={upwd}
                                            onChange={event => setUpwd(event.target.value)} />
                                        {
                                            formErrors.passwordError && <div style={{ color: 'red' }}>{formErrors.passwordError}</div>
                                        }

                                    </div>
                                    <button className="btn btn-primary" onClick={doLogin}>Login</button>
                                    <Link style={{ marginLeft: '10px' }} to={`/customer/add`} className="btn btn-primary" >Register</Link>
                                </div>
                            </div>
            }
        </div>

    )


}
export default Login;