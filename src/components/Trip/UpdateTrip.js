import React,{useState,useEffect} from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { fetchTrip, updateTrips } from "../../store/actions/TripAction";

function UpdateTrip() {

    
    const [fromlocation,setFromlocation] = useState("");
    const [tolocation,setTolocation] = useState("");
    const [fromdatetime,setFromdatetime] = useState("");
    const [todatetime,setTodatetime] = useState("");
    const [status,setStatus] = useState("");
   
    const trip = useSelector(state => state.tripReducer.trip);
    const {tripBookingId} = useParams(); 
    const navigate=useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrip(tripBookingId));
    },[dispatch,tripBookingId]);

    //prepopulate the form data
     useEffect(() => {
        if(trip){        
             setFromlocation(trip.fromLocation);
            setTolocation(trip.toLocation);
            setFromdatetime(trip.fromDateTime);
            setTodatetime(trip.toDateTime); 
            setStatus(trip.status)
                      
         }
    },[trip]); 
    
    //update trip details
    const updateTrip = () =>{
        const payload= {
            tripBookingId: tripBookingId,
            fromLocation: fromlocation,
            toLocation: tolocation,
            fromDateTime: fromdatetime, 
            toDateTime: todatetime, 
            status: status,
            
        }
        //call the api to update trip
        dispatch(updateTrips(payload))
    }

    return(

        <div className="container">
        
         <div className="form-group">
                <label>From Location</label>
                <input type="text" name="fromlocation" value={fromlocation}
                onChange={event => setFromlocation(event.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>To Location</label>
                <input type="text" name="tolocation" value={tolocation}
                onChange={event => setTolocation(event.target.value)} className="form-control"/>
            </div>
            <div className="form-group">
                <label>From DateTime</label>
                <input type="date" name="fromdatetime" value={fromdatetime}
                onChange={event => setFromdatetime(event.target.value)} className="form-control"/>
            </div>
            <div className="form-group">
                <label>To DateTime</label>
                <input type="date" name="todatetime" value={todatetime}
                onChange={event => setTodatetime(event.target.value)} className="form-control"/>
            </div>
             
            <div className="form-group" style={{marginTop:'30px'}}>
                <label>Status</label>
                <input type="text" name="status" value={status}
                onChange={event => setStatus(event.target.value)} className="form-control"/>
            </div>
            
           
        <button onClick={updateTrip} className="btn btn-primary">Update</button>&nbsp;
        <button onClick={() => navigate(-1)} className="btn btn-primary" >Back</button>

    </div>
    )
}
export default UpdateTrip;