import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { Bills } from "../store/actions/TripAction";
import { Link } from 'react-router-dom';


function TripBill() {
    const [tripBookingId, settripBookingId] = useState('');
    const [distanceinKm, setdistanceinKm] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();


    const Bill = () => {
        let errors = {};
        if (!tripBookingId) {
            errors['tripBookingIdError'] = 'Id is required';
        }
        if (!distanceinKm) {
            errors['distanceinKmError'] = 'Distance is required';
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

        <div className="container">
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
            <button onClick={Bill} className="btn btn-primary">GenerateBill</button>
            <div>
                <button className="btn btn-light" ><Link to="/admin/dashboard"> Go Back</Link></button>
            </div>
        </div>

    )

}
export default TripBill;