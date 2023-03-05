import React from "react";
import { useNavigate } from "react-router-dom";
import cabs1 from "../../assets/cabs1.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import profiledb from "../../assets/profiledb.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions/LoginAction";
import Login from "../Login";

function AdminDashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
   

    const doLogout = () => {
       dispatch(logOut())
       navigate("/")
      }
      if(myuser === null){
       return <Login/>
      }

    return (
        <div>

            
            <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
                <img className="card-img-top" src={cabs1} alt="Card image" style={{ width: '5%' }} />
                <ul class="navbar-nav">
                </ul>
                <span class="navbar-text" style={{ marginLeft: 500, color: 'white' }}><b>AdminDashboard</b></span>
                <Link to={`/admin/profile`}><img className="card-img-top" src={profiledb} alt="Card image" style={{ width: '6%',marginLeft: 400 }} /></Link>
                
                <button onClick={doLogout} className=" btn-light" >LogOut</button>
            </nav>
            <center>
                <div>

                    <Link to={`/admin/driver`} className="btn  btn-block btn-outline-dark" style={{ marginTop: 120 }}>Drivers</Link>
                </div>
                <div>
                    <Link to={`/driver/add`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>Add Driver</Link>
                </div>
                <div>
                    <Link to={`/admin/cab`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>Cabs</Link>
                </div>
                <div>
                    <Link to={`/cab/add`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>Add Cab</Link>
                </div>
                <div>
                    <Link to={`/admin/trip`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>Trips</Link>
                </div>
                <div>
                    <Link to={`/users/getall`} className="btn btn-block btn-outline-dark" style={{ marginTop: 30 }}>All Users</Link>
                </div>
               
                <div style={{ marginTop: '50px' }}>
                    <Footer />

                </div>
            </center>

        </div>
    )
}
export default AdminDashboard;