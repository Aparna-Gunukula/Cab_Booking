import React from "react";
import { useNavigate } from "react-router-dom";
import cabs from "../assets/cabs.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));

    const doLogout = () => {
        if (myuser !== null) {

            localStorage.removeItem("myuser")
            alert("logged out");
            navigate("/");
        }
    }

    return (
        <div>

            <nav class="navbar navbar-expand-sm bg-dark justify-content-right fixed-top">
                <img className="card-img-top" src={cabs} alt="Card image" style={{ width: '5%' }} />
                <ul class="navbar-nav">
                </ul>
                <span class="navbar-text" style={{ marginLeft: 500, color: 'white' }}><b>AdminDashboard</b></span>
                <Link to={`/`} className="btn btn-primary" style={{ marginLeft: 450 }}>Log Out</Link>

            </nav>
            <center>
                <div>

                    <Link to={`/admin/driver`} className="btn btn-primary" style={{ marginTop: 70 }}>Drivers</Link>
                </div>
                <div>
                    <Link to={`/driver/add`} className="btn btn-primary" style={{ marginTop: 30 }}>Add Driver</Link>
                </div>
                <div>
                    <Link to={`/admin/cab`} className="btn btn-primary" style={{ marginTop: 30 }}>Cabs</Link>
                </div>
                <div>
                    <Link to={`/admin/trip`} className="btn btn-primary" style={{ marginTop: 30 }}>Trips</Link>
                </div>
                <div>
                    <Link to={`/trip/bill`} className="btn btn-primary" style={{ marginTop: 30 }}>Bill Generation</Link>

                </div>
                <div style={{ marginTop: '60px' }}>
                    <Footer />

                </div>
            </center>

        </div>
    )
}
export default AdminDashboard;