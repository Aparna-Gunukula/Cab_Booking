import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ViewCabById } from "../../store/actions/CabAction";
import { Link } from 'react-router-dom';


function GetCabById() {
    const cab = useSelector(state => state.cabReducer.cab);
    const dispatch = useDispatch();
    const { cabId } = useParams();


    useEffect(() => {
        dispatch(ViewCabById(cabId));
    }, [cabId])

    return (
        <div>
            {
                cab !== null &&
                <div>
                    <center>

                        <h2 style={{marginTop:'30px',marginBottom:'10px'}}>Cab Details</h2>
                        <table className="table table-danger table-striped table-hover table-responsive ">
                            <thead>
                                <th><b>Cab Id </b></th>
                                <th><b>Cab No </b></th>
                                <th><b>Car Type </b></th>
                                <th><b>Cab Name </b></th>
                                <th><b>PerKmRate </b></th>

                                <th><b>Driver Id </b></th>
                                <th><b>Driver Name </b></th>
                                <th><b>Driver Number </b></th>
                                <th><b>Driver EmailId </b></th>
                                <th><b>Driver Location </b></th>
                                <th><b>Driver Rating </b></th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{cab.cabId}</td>
                                    <td>{cab.cabNo}</td>
                                    <td>{cab.cartype}</td>
                                    <td>{cab.cabName}</td>
                                    <td>{cab.perKmRate}</td>
                                    <td>{cab.driver.userId}</td>
                                    <td>{cab.driver.userName}</td>
                                    <td>{cab.driver.mobilenumber}</td>
                                    <td>{cab.driver.emailId}</td>
                                    <td>{cab.driver.location}</td>
                                    <td>{cab.driver.rating}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to={`/trip/add/${cab.cabId}/${cab.driver.userId}`}  style={{borderRadius:15}} className="btn btn-light" >Book your Trip</Link>&nbsp;
                        <button className="btn btn-light" style={{borderRadius:15}}  ><Link to="/customer/dashboard"> Back</Link></button>
                    </center> </div>
            }

        </div>
    )

}
export default GetCabById;