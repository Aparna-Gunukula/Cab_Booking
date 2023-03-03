import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ViewCabById } from "../store/actions/CabAction";
import { Link } from 'react-router-dom';

function AdminCabById() {
    const cab = useSelector(state => state.cabReducer.cab);
    const dispatch = useDispatch();
    const { cabId } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(ViewCabById(cabId));
    }, [cabId])

    return (
        <div>
            <div>
                {
                    cab !== null &&
                    <div>
                        <h2>Cab Details</h2>
                        <p>CabId: {cab.cabId}</p>
                        <p>CabNo: {cab.cabNo}</p>
                        <p>CabType: {cab.cartype}</p>
                        <p>CabName: {cab.cabName}</p>
                        <p>PerKmRate: {cab.perKmRate}</p>
                        <h5>Driver Details</h5>
                        <p>DriverId: {cab.driver.userId}</p>
                        <p>UserName: {cab.driver.userName}</p>
                        <p>MobileNumber: {cab.driver.mobilenumber}</p>
                        <p>EmailId: {cab.driver.emailId}</p>
                        <p>location: {cab.driver.location}</p>
                        <p>Rating: {cab.driver.rating}</p>
                        {/* <Link to={`/trip/add/${cab.cabId}/${cab.driver.userId}`} className="btn btn-primary" >Book your Trip</Link> */}
                    </div>

                }

            </div>
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )

}
export default AdminCabById;