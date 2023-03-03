import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addDriver } from "../store/actions/DriverAction";

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
            errors['userNameError'] = 'UserName is required';
        }
        if (!pswd) {
            errors['passwordError'] = 'password is required';
        }
        if (!mobile) {
            errors['mobilenumberError'] = 'mobile number is required';
        }
        if (!emailId) {
            errors['emailIdError'] = 'EmailId is required';
        }
        if (!licenseNo) {
            errors['licenseNoError'] = 'licenseNo is required';
        }
        if (!location) {
            errors['locationError'] = 'location is required';
        }
        if (!rating) {
            errors['ratingError'] = 'rating is required';
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
        <div className='container'><h3>Add Driver</h3>
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
            <button onClick={handleSubmit} className="btn btn-primary">Save</button>
            <div>
                <button className="btn btn-light" ><Link to="/admin/dashboard"> Go to DashBoard</Link></button>
            </div>
        </div>
    )

}
export default AddDriver;