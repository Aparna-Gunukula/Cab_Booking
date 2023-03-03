import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteCab, ViewCabById } from "../store/actions/CabAction";

function DeleteCab() {

    const { cid } = useParams();
    const dispatch = useDispatch();
    const cab = useSelector(state => state.cabReducer.cab);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(ViewCabById(cid));
    }, [dispatch, cid]);


    const handleDelete = () => {
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
                <div>
                    <h2>Cab Details</h2>
                    <p>CabId:{cab.cabId}</p>
                    <p>CabNo:{cab.cabNo}</p>
                    <p>CabType:{cab.cartype}</p>
                    <p>CabName:{cab.cabName}</p>
                    <p>PerKmRate:{cab.perKmRate}</p>

                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
            }

        </div>
    )
}
export default DeleteCab;