import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { fetchDriver, updateDriver } from '../../store/actions/DriverAction';
import { Link } from 'react-router-dom';

function UpdateDriver() {
    const driver = useSelector(state => state.driverReducer.driver);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cId, setCId] = useState("");
    const [uname, setUname] = useState("");
    const [pswd, setPswd] = useState("");
    const [mobile, setMobile] = useState("");
    const [emailId, setEmailId] = useState("");
    const [licenseNo, setLicenseNo] = useState("");
    const [location, setLocation] = useState("");
   

    const { dUserID } = useParams();
    const Navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchDriver(dUserID))
    },[dispatch,dUserID])

    //prepopulate the form data
    useEffect(() => {
        if(driver){
                setCId(driver.userId);
                setUname(driver.userName);
                setPswd(driver.password);
                setMobile(driver.mobilenumber);
                setEmailId(driver.emailId);
                setLicenseNo(driver.licenseNo);
                setLocation(driver.location);
               

            };
    }, [driver])
    // update customer details
    const UpdateDriver = () => {
        const payload = {
            userId: dUserID,
            userName: uname,
            password: pswd,
            mobilenumber: mobile,
            emailId: emailId,
            licenseNo: licenseNo,
            location: location,
           
        }
            dispatch(updateDriver(payload))
    }
    return (
        <div className='container' style={{marginTop:'20px'}}>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="uname" value={uname}
                    onChange={event => setUname(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="pswd" value={pswd}
                    onChange={event => setPswd(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Mobilenumber</label>
                <input type="number" name="mobile" value={mobile}
                    onChange={event => setMobile(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>EmailId</label>
                <input type="email" name="emailId" value={emailId}
                    onChange={event => setEmailId(event.target.value)} className="form-control" />
            </div>
            <div className='form-group'>
                <label>LicenseNo</label>
                <input type="text" className="form-control" name="licenseNo" value={licenseNo}
                    onChange={event => setLicenseNo(event.target.value)} />
            </div>
            <div className='form-group'>
                <label>Location</label>
                <input type="text" className="form-control" name="location" value={location}
                    onChange={event => setLocation(event.target.value)} />
            </div>
            
            <div>
            <button onClick={UpdateDriver} style={{borderRadius:'20px'}}>Save</button>&nbsp;&nbsp;
            <button onClick={() => navigate(-1)} style={{borderRadius:'20px'}}>Back</button>
            </div>

        </div>
    )


}
export default UpdateDriver;