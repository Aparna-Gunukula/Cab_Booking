import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewAllCabs } from "../../store/actions/CabAction";
import maxicar from "../../assets/maxicar.png";
import { Link, useNavigate } from "react-router-dom";
import cabs1 from "../../assets/cabs1.png";
import profiledb from "../../assets/profiledb.png";
import Login from "../Login";
import { logOut } from "../../store/actions/LoginAction";


function AdminCab() {
    const cabs = useSelector(state => state.cabReducer.cabs);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));

    useEffect(() => {
        dispatch(ViewAllCabs());
    }, [])

    const doLogout = () => {
        dispatch(logOut())
        navigate("/")
       }
       if(myuser === null){
        return <Login/>
       }
    return (
        <div >
              <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
                <img className="card-img-top" src={cabs1} alt="Card image" style={{ width: '5%' }} />
                <ul class="navbar-nav">
                </ul>
                <span class="navbar-text" style={{ marginLeft: 500, color: 'white' }}><b>AdminDashboard</b></span>
                <Link to={`/admin/profile`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '6%',marginLeft: 400 }} /></Link>
                <button onClick={doLogout} className=" btn-light" >LogOut</button>

            </nav>

            <div className='container'>
                <div class="card-columns">
                    {
                        cabs.map(c =>
                            <div className="card" style={{ width: '280px' ,marginTop:'90px'}}>
                                <div className="card bg-light" key={c.cabId} style={{ width: 250 + "px" }}>
                                    <img className="card-img-top" src={maxicar} alt="Card image" style={{ width: '75%' }} />
                                    <div className="card-body text-center">
                                        <p className="card-text"><b>Cab Id </b>:{c.cabId}</p>
                                        <p className="card-text"><b>Car Type</b> :{c.cartype}</p>
                                        <p className="card-text"><b>PerKmRate</b> :{c.perKmRate}</p>
                                        <Link to={`/admin/cabbyid/${c.cabId}`} className="btn " style={{ borderRadius:19}} >View</Link>
                                        <Link to={`/cab/update/${c.cabId}`} className="btn "style={{ borderRadius:19}} >Update</Link>
                                        <Link to={`/cab/delete/${c.cabId}`} className="btn "style={{ borderRadius:19}} >Delete</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            <div><center>
                <button style={{marginTop:'10px',borderRadius:18}} className="btn btn-light" onClick={() => navigate(-1)}>Back</button>
            </center></div>
        </div>
    )
}
export default AdminCab;
