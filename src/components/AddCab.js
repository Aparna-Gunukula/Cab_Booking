import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCab } from "../store/actions/CabAction";


function AddCab() {
    const [cnumber, setCnumber] = useState("");
    const [ctype, setCtype] = useState("");
    const [cname, setCname] = useState("");
    const [kmrate, setKmrate] = useState("");
    const [dId, setDId] = useState("");
    const [formErrors, setFormErrors] = useState({});

    const dispatch = useDispatch();

    const handleSave = () => {
        let errors = {};
        if (!cnumber) {
            errors['cabNoError'] = 'CabNo is required';
        }
        if (!ctype) {
            errors['cartypeError'] = 'Cartype is required';
        }
        if (!cname) {
            errors['cabNameError'] = 'CabName is required';
        }
        if (!kmrate) {
            errors['perKmRateError'] = 'PerKmRate is required';
        }
        if (kmrate < 0) {
            errors['perKmRateError'] = 'PerKmRate should be positive';
        }
        if (!dId) {
            errors['driverIdError'] = 'Driver Id is required';
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            const reqPayload = {
                cabNo: cnumber,
                cartype: ctype,
                cabName: cname,
                perKmRate: kmrate,
                driver: { userId: dId }
            }
            dispatch(addCab(reqPayload))

        }
    }
    return (
        <div className="container">
            <div className="form-group">
                <label>Cab Number</label>
                <input type="text" name="cnumber" value={cnumber}
                    onChange={event => setCnumber(event.target.value)} className="form-control" />
                {
                    formErrors.cabNoError && <div style={{ color: 'red' }}>{formErrors.cabNoError}</div>
                }
            </div>
            <div className="form-group">
                <label>Car Type</label>
                <input type="text" name="ctype" value={ctype}
                    onChange={event => setCtype(event.target.value)} className="form-control" />
                {
                    formErrors.cartypeError && <div style={{ color: 'red' }}>{formErrors.cartypeError}</div>
                }
            </div>
            <div className="form-group">
                <label>Cab Name</label>
                <input type="text" name="cname" value={cname}
                    onChange={event => setCname(event.target.value)} className="form-control" />
                {
                    formErrors.cabNameError && <div style={{ color: 'red' }}>{formErrors.cabNameError}</div>
                }
            </div>
            <div className="form-group">
                <label>PerKmRate</label>
                <input type="number" name="kmrate" value={kmrate}
                    onChange={event => setKmrate(event.target.value)} className="form-control" />
                {
                    formErrors.perKmRateError && <div style={{ color: 'red' }}>{formErrors.perKmRateError}</div>
                }
            </div>
            <div className="form-group">
                <label>Driver Id</label>
                <input type="number" name="dId" value={dId}
                    onChange={event => setDId(event.target.value)} className="form-control" />
                {
                    formErrors.driverIdError && <div style={{ color: 'red' }}>{formErrors.driverIdError}</div>
                }
            </div>
            <button onClick={handleSave} className="btn btn-primary">Save</button>

        </div>
    )
}

export default AddCab;