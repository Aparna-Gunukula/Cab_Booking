import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../store/actions/UserAction';
import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

function GetAllUsers() {
    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (
        <div className='container'>
            <div className="card-columns">{

                users.length > 0 &&
                users.map(d =>
                    <div className="card" style={{ width: '200px' }}>
                        <div className="card bg-light" key={d.userId} style={{ width: 250 + "px" }}>
                            <img className="catd-img-top" src={profile} alt="Card image" style={{ width: '75%' }} />
                            <div className="card-body text-center">
                                <p className="card-text"><b>User Id </b>:{d.userId}</p>
                                <p className="card-text"><b>D Type </b>:{d.dtype}</p>
                                <p className="card-text"><b>User Name </b>:{d.userName}</p>
                                <p className="card-text"><b>Password </b>:{d.password}</p>
                                <p className="card-text"><b>EmailId </b>:{d.emailId}</p>
                            </div>
                        </div>
                    </div>
                )
            }


            </div>
        </div>


    )
}
export default GetAllUsers;