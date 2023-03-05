import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteCab, ViewCabById } from "../../store/actions/CabAction";

function DeleteCab() {

    const { cid } = useParams();
    const dispatch = useDispatch();
    const cab = useSelector(state => state.cabReducer.cab);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(ViewCabById(cid));
    }, [dispatch, cid]);


    const handleDelete = () => {
        const alert=window.confirm("Are you sure, you want to delete this item?");
        dispatch(deleteCab(cid))
            .then(resp => {
                alert(resp.data);
                navigate("/cab/all");
            });


    }
    return (
        <div>
            {
                cab !== null &&
                <div><center>
                    <h2 style={{textDecoration:'underline', marginTop:20,marginBottom:10}}>Cab Details</h2><hr/>
                    <p><b>CabId:</b> {cab.cabId}</p>
                    <p><b>CabNo:</b> {cab.cabNo}</p>
                    <p><b>CabType:</b> {cab.cartype}</p>
                    <p><b>CabName:</b> {cab.cabName}</p>
                    <p><b>PerKmRate:</b> {cab.perKmRate}</p>

                    <button onClick={handleDelete}style={{borderRadius:15}} className="btn btn-light">Delete</button> &nbsp;
                    <button onClick={() => navigate(-1)}style={{borderRadius:15}} className="btn btn-light">Back</button>
                    </center></div>
            }

        </div>
    )
}
export default DeleteCab;