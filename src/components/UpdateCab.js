import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ViewCabById, updateCab } from "../store/actions/CabAction";

function UpdateCab() {
    const [cId, setCId] = useState("");
    const [cnumber, setCnumber] = useState("");
    const [ctype, setCtype] = useState("");
    const [cname, setCname] = useState("");
    const [kmrate, setKmrate] = useState("");
    const [dId, setDId] = useState("");

    const { cid } = useParams();
    const navigate = useNavigate();

    const cab = useSelector(state => state.cabReducer.cab);
    const dispatch = useDispatch();

    //prepopulate the form data

    useEffect(() => {
        dispatch(ViewCabById(cid));
    }, [dispatch, cid]);
    useEffect(() => {
        if (cab) {
            setCId(cab.cabId);
            setCnumber(cab.cabNo);
            setCtype(cab.cartype);
            setCname(cab.cabName);
            setKmrate(cab.perKmRate);
            setDId(cab.driver.userId);
        }
    }, [cab]);

    //update cab details
    const UpdateCab = () => {
        const Payload = {
            cabId: cid,
            cabNo: cnumber,
            cartype: ctype,
            cabName: cname,
            perKmRate: kmrate,
            driver: { userId: dId }
        }

        dispatch(updateCab(Payload))
    }

    return (
        <div className="container">
            <div className="form-group">
                <label>Cab Id</label>
                <input type="text" name="cId" value={cId}
                    onChange={event => setCId(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Cab Number</label>
                <input type="text" name="cnumber" value={cnumber}
                    onChange={event => setCnumber(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Car Type</label>
                <input type="text" name="ctype" value={ctype}
                    onChange={event => setCtype(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Cab Name</label>
                <input type="text" name="cname" value={cname}
                    onChange={event => setCname(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>PerKmRate</label>
                <input type="number" name="kmrate" value={kmrate}
                    onChange={event => setKmrate(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Driver Id</label>
                <input type="number" name="dId" value={dId}
                    onChange={event => setDId(event.target.value)} className="form-control" />

            </div>
            <button onClick={UpdateCab} className="btn btn-primary">Update</button>
            <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
        </div>
    )
}
export default UpdateCab;