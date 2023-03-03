import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCustomers } from '../store/actions/CustomerAction';
import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

function GetAllCustomers() {
    const customers = useSelector(state => state.customerReducer.customers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCustomers());
    }, [])

    return (
        <div className='container'>
            <div className="card-columns">{

                customers.length > 0 &&
                customers.map(d =>
                    <div className="card" style={{ width: '280px' }}>
                        <div className="card bg-light" key={d.userId} style={{ width: 280 + "px" }}>
                            <img className="catd-img-top" src={profile} alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body text-center">
                                <p className="card-text"><b>Customer Id </b>:{d.userId}</p>
                                <p className="card-text"><b>Customer Name </b>:{d.userName}</p>

                                <Link to={`/customer/${d.userId}`} className="btn" >View</Link>
                                <Link to={`/customer/update/${d.userId}`} className="btn" style={{ marginLeft: '5px' }} >Update</Link>
                                <Link to={`/customer/delete/${d.userId}`} className="btn" style={{ marginLeft: '5px' }}>Delete</Link>

                            </div>
                        </div>
                    </div>
                )
            }


            </div>
        </div>


    )
}
export default GetAllCustomers;