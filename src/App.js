import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import GetAllCabs from './components/GetAllCabs';
import GetCabById from './components/GetCabById';
import AddCab from './components/AddCab';
import UpdateCab from './components/UpdateCab';
import DeleteCab from './components/DeleteCab';
import Login from './components/Login';
import CustomerDashboard from './components/CustomerDashboard';
import DriverDashboard from './components/DriverDashboard';
import AdminDashboard from './components/AdminDashboard';
import GetAllTrips from './components/GetAllTrips';
import GetTripById from './components/GetTripById';
import UpdateTrip from './components/UpdateTrip';
import AddTrip from './components/AddTrip';
import TripBill from './components/TripBill';
import GetAllCustomers from './components/GetAllCustomers';
import GetCustomerById from './components/GetCustomerById';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import Registration from './components/Registration';
import GetAllUsers from './components/GetAllUsers';
import GetAllDrivers from './components/GetAllDrivers';
import GetDriverById from './components/GetDriverById';
import AddDriver from './components/AddDriver';
import UpdateDriver from './components/UpdateDriver';
import DeleteDriver from './components/DeleteDriver';
import ContactUs from './components/ContactUs';
import AdminCab from './components/AdminCab';
import AdminTrip from './components/AdminTrip';
import AdminDriver from './components/AdminDriver';
import AdminCabById from './components/AdminCabById';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        {/* Login */}

        <Route path="/" element={<Login />} />
        <Route path='/customer/dashboard' element={<CustomerDashboard />} />
        <Route path="/contactUs" element={<ContactUs />} />
        {/* <Route path="/footer" element={<Footer/>} /> */}
        <Route path='/driver/dashboard' element={<DriverDashboard />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />

        {/* User */}

        <Route path="/users/getall" element={<GetAllUsers />} />

        {/* Admin */}

        <Route path="/admin/cab" element={<AdminCab />} />
        <Route path="/admin/cabbyid/:cabId" element={<AdminCabById />} />
        <Route path="/admin/trip" element={<AdminTrip />} />
        <Route path="/admin/driver" element={<AdminDriver />} />

        {/* Customer */}

        <Route path="/customers/getall" element={<GetAllCustomers />} />
        <Route path="/customer/:userId" element={<GetCustomerById />} />
        <Route path="/customer/add" element={<Registration />} />
        <Route path="/customer/update/:cUserId" element={<UpdateCustomer />} />
        <Route path="/customer/delete/:userId" element={<DeleteCustomer />} />

        {/* Driver */}

        <Route path='/driver/getAll' element={<GetAllDrivers />} />
        <Route path="/driver/getById/:userID" element={<GetDriverById />} />
        <Route path="/driver/add" element={<AddDriver />} />
        <Route path="/driver/update/:dUserID" element={<UpdateDriver />} />
        <Route path="/driver/delete/:dUserID" element={<DeleteDriver />} />

        {/* Cab */}
        <Route path='/cab/all' element={<GetAllCabs />} />
        <Route path="/cab/getById/:cabId" element={<GetCabById />} />
        <Route path='/cab/add' element={<AddCab />} />
        <Route path="/cab/update/:cid" element={< UpdateCab />} />
        <Route path="/cab/delete/:cid" element={< DeleteCab />} />

        {/* Trips */}

        <Route path='/trip/getAll' element={<GetAllTrips />} />
        <Route path='/trip/getById/:tripBookingId' element={<GetTripById />} />
        <Route path='/trip/update/:tripBookingId' element={<UpdateTrip />} />
        <Route path="/trip/add/:cabId/:userId" element={<AddTrip />} />
        <Route path="/trip/bill" element={<TripBill />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
