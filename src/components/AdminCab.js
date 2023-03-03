import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewAllCabs } from "../store/actions/CabAction";
import maxicar from "../assets/maxicar.png";
import { Link, useNavigate } from "react-router-dom";

function AdminCab() {
    const cabs = useSelector(state => state.cabReducer.cabs);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(ViewAllCabs());
    }, [])

    return (
        <div>


            <div className='container'>
                <div class="card-columns">
                    {
                        cabs.map(c =>
                            <div className="card" style={{ width: '200px' }}>
                                <div className="card bg-light" key={c.cabId} style={{ width: 250 + "px" }}>
                                    <img className="card-img-top" src={maxicar} alt="Card image" style={{ width: '75%' }} />
                                    <div className="card-body text-center">
                                        <p className="card-text"><b>Cab Id </b>:{c.cabId}</p>
                                        <p className="card-text"><b>Car Type</b> :{c.cartype}</p>
                                        <p className="card-text"><b>PerKmRate</b> :{c.perKmRate}</p>
                                        <Link to={`/admin/cabbyid/${c.cabId}`} className="btn btn-primary" >View</Link>
                                        <Link to={`/cab/update/${c.cabId}`} className="btn btn-primary" >Update</Link>
                                        <Link to={`/cab/delete/${c.cabId}`} className="btn btn-primary" >Delete</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
        </div>
    )
}
export default AdminCab;
