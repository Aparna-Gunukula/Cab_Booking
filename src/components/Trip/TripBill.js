import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { Bills } from "../../store/actions/TripAction";
import { useNavigate} from 'react-router-dom';


function TripBill() {
    const [tripBookingId, settripBookingId] = useState('');
    const [distanceinKm, setdistanceinKm] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Bill = () => {
        let errors = {};
        if (!tripBookingId) {
            errors['tripBookingIdError'] = 'This field is required';
        }
        if (!distanceinKm) {
            errors['distanceinKmError'] = 'This field is required';
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const payload = {
                tripBookingId: tripBookingId,
                distanceinKm: distanceinKm
            }

            dispatch(Bills(payload))

        }
    }
    return (

        <div className="container" style={{marginTop:'30px'}}>
            <div className="form-group">
                <label>Trip BookingId</label>
                <input type="number" name="tripBookingId" value={tripBookingId}
                    onChange={event => settripBookingId(event.target.value)} className="form-control" />
                {
                    formErrors.tripBookingIdError && <div style={{ color: 'red' }}>{formErrors.tripBookingIdError}</div>
                }
            </div>
            <div className="form-group">
                <label>DistanceInKm</label>
                <input type="number" name="distanceinKm" value={distanceinKm}
                    onChange={event => setdistanceinKm(event.target.value)} className="form-control" />
                {
                    formErrors.distanceinKmError && <div style={{ color: 'red' }}>{formErrors.distanceinKmError}</div>
                }
            </div>
            <center>
        <button onClick={Bill} className=" btn-light"  style={{borderRadius:'10px'}}>GenerateBill</button> &nbsp;
        <button onClick={() => navigate(-1)} className=" btn-light"  style={{borderRadius:'10px'}} > Back</button></center>
        </div>

    )

}
export default TripBill;