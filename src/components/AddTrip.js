import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTrip } from "../store/actions/TripAction";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function AddTrip() {
    const [fromlocation, setFromlocation] = useState("");
    const [tolocation, setTolocation] = useState("");
    const [fromdatetime, setFromdatetime] = useState("");
    const [todatetime, setTodatetime] = useState("");

    const { cabId } = useParams();
    const { userId } = useParams();

    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();
    const myuser = JSON.parse(localStorage.getItem("myuser"));

    const handleSubmit = () => {
        let errors = {};
        if (!fromlocation) {
            errors['FromLocationError'] = 'From location is required';
        }
        if (!tolocation) {
            errors['ToLocationError'] = 'To location is required';
        }
        if (!fromdatetime) {
            errors['FromDateTimeError'] = 'FromDateTime is required';
        }
        if (!todatetime) {
            errors['ToDateTimeError'] = 'ToDateTime is required';
        }

        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const reqpayload = {
                fromLocation: fromlocation,
                toLocation: tolocation,
                fromDateTime: fromdatetime,
                toDateTime: todatetime,
                customer: { userId: myuser.userId },
                driver: { userId: userId },
                cab: { cabId: cabId }
            }

            dispatch(addTrip(reqpayload))
        }
    }
    return (
        <div className="container">
            <div className="form-group">
                <label>From Location</label>
                <input type="text" name="fromlocation" value={fromlocation}
                    onChange={event => setFromlocation(event.target.value)} className="form-control" />
                {
                    formErrors.FromLocationError && <div style={{ color: 'red' }}>{formErrors.FromLocationError}</div>
                }

            </div>
            <div className="form-group">
                <label>To Location</label>
                <input type="text" name="tolocation" value={tolocation}
                    onChange={event => setTolocation(event.target.value)} className="form-control" />
                {
                    formErrors.ToLocationError && <div style={{ color: 'red' }}>{formErrors.ToLocationError}</div>
                }
            </div>
            <div className="form-group">
                <label>From DateTime</label>
                <input type="datetime-local" name="fromdatetime" value={fromdatetime}
                    onChange={event => setFromdatetime(event.target.value)} className="form-control" />
                {
                    formErrors.FromDateTimeError && <div style={{ color: 'red' }}>{formErrors.FromDateTimeError}</div>
                }
            </div>
            <div className="form-group">
                <label>To DateTime</label>
                <input type="datetime-local" name="todatetime" value={todatetime}
                    onChange={event => setTodatetime(event.target.value)} className="form-control" />
                {
                    formErrors.ToDateTimeError && <div style={{ color: 'red' }}>{formErrors.ToDateTimeError}</div>
                }
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">Save</button>
            <div>
                <button className="btn btn-light" ><Link to="/customer/dashboard"> Go Back</Link></button>
            </div>


        </div>
    )
}
export default AddTrip;