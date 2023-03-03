import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDrivers } from '../store/actions/DriverAction';
import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

function GetAllDrivers() {
    const drivers = useSelector(state => state.driverReducer.drivers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllDrivers());
    }, [])

    return (
        <div className='container'>
            <div class="card-columns">{

                drivers.length > 0 &&
                drivers.map(d =>
                    <div className="card" style={{ width: '280px' }}>
                        <div className="card bg-light" key={d.userID} style={{ width: 280 + "px" }}>
                            <img className="catd-img-top" src={profile} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body text-center">
                                <p className="card-text"><b>Driver Id </b>:{d.userID}</p>
                                <p className="card-text"><b>Driver Name </b>:{d.userName}</p>
                                <p className="card-text"><b>Password </b>:{d.password}</p>
                                <Link to={`/driver/getById/${d.userID}`} className="btn" >View</Link>
                                <Link to={`/driver/update/${d.userID}`} className="btn" style={{ marginLeft: '5px' }}>Update</Link>
                                <Link to={`/driver/delete/${d.userID}`} className="btn" style={{ marginLeft: '5px' }}>Delete</Link>
                            </div>
                        </div>
                    </div>
                )
            }


            </div>
        </div>


    )
}
export default GetAllDrivers;