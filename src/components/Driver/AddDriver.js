import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addDriver } from "../../store/actions/DriverAction";

function AddDriver() {

    const [uname, setUname] = useState("");
    const [pswd, setPswd] = useState("");
    const [mobile, setMobile] = useState("");
    const [emailId, setEmailId] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState("");
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
        if (!licenseNo) {
            errors['licenseNoError'] = '*This field is required';
        }
        if (!location) {
            errors['locationError'] = '*This field is required';
        }
        if (!rating) {
            errors['ratingError'] = '*This field is required';
        }

        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const reqPayLoad = {
                userName: uname,
                password: pswd,
                mobilenumber: mobile,
                emailId: emailId,
                licenseNo: licenseNo,
                location: location,
                rating: rating
            }

            dispatch(addDriver(reqPayLoad))
        }
    }

    return (
        <div className='container'><h3 style={{textDecoration:'underline'}}>Add Driver</h3>
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
                <input type="text" name="mobile" value={mobile}
                    onChange={event => setMobile(event.target.value)} className="form-control" />
                {
                    formErrors.mobilenumberError && <div style={{ color: 'red' }}>{formErrors.mobilenumberError}</div>
                }
            </div>
            <div className='form-group'>
                <label>EmailId</label>
                <input type="text" name="emailId" value={emailId}
                    onChange={event => setEmailId(event.target.value)} className="form-control" />
                {
                    formErrors.emailIdError && <div style={{ color: 'red' }}>{formErrors.emailIdError}</div>
                }
            </div>

            <div className='form-group'>
                <label>LicenseNo</label>
                <input type="text" name="licenseNo" value={licenseNo}
                    onChange={event => setLicenseNo(event.target.value)} className="form-control" />
                {
                    formErrors.licenseNoError && <div style={{ color: 'red' }}>{formErrors.licenseNoError}</div>
                }
            </div>
            <div className='form-group'>
                <label>Location</label>
                <input type="text" name="location" value={location}
                    onChange={event => setLocation(event.target.value)} className="form-control" />
                {
                    formErrors.locationError && <div style={{ color: 'red' }}>{formErrors.locationError}</div>
                }
            </div>
            <div className='form-group'>
                <label>Rating</label>
                <input type="text" name="rating" value={rating}
                    onChange={event => setRating(event.target.value)} className="form-control" />
                {
                    formErrors.ratingError && <div style={{ color: 'red' }}>{formErrors.ratingError}</div>
                }
            </div>
            <button onClick={handleSubmit} style={{borderRadius:15}} className=" btn-light">Save</button>&nbsp;
            <button className=" btn-light" style={{borderRadius:15}} ><Link to="/admin/dashboard"> Go to DashBoard</Link></button>
            
        </div>
    )

}
export default AddDriver;