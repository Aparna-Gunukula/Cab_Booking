import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDriver } from "../../store/actions/DriverAction";

function AdminDriverById() {
    const driver = useSelector(state => state.driverReducer.driver);

    const dispatch = useDispatch();
    const { userID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchDriver(userID));
    }, [userID])

    return (
        <div>
            {
                driver !== null &&
                <div>
                    <center>
                        <h3 style={{color:"black" , marginTop:30, marginBottom:20}}>Driver Details</h3>
                        <table className="table table-danger table-striped table-hover ">
                            <thead>

                                <th><b>DriverId</b> </th>
                                <th><b>Name</b> </th>
                                <th><b>Mobile Number</b></th>
                                <th><b>EmailId</b></th>
                                <th><b>Rating</b> </th>
                                <th><b>LicenseNo</b> </th>
                                <th><b>Location</b> </th>
                               
                            </thead>
                            <tbody >
                                
                                     {/* driver.length > 0 &&
                                     driver.map(d => */}
                                        {/* <tr key={driver.userID}> */}
                                        <tr>
                                            <td>{driver.userID}</td>
                                            <td>{driver.userName}</td>
                                            <td>{driver.mobilenumber}</td>
                                            <td>{driver.emailId}</td>
                                            <td>{driver.rating}</td>
                                            <td>{driver.licenseNo}</td>
                                            <td>{driver.location}</td>
                            
                                        </tr>
                                    
                                
                            </tbody>


                        </table>
                        <div>
                            <button className="btn btn-light"  onClick={() => navigate(-1)} style={{borderRadius:15}}>Back</button>
                        </div>
                    </center>

                </div>
            }
        </div>
    )

}
export default AdminDriverById;