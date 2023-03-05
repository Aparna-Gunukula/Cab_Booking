import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import GetAllCabs from './components/Cab/GetAllCabs';
import GetCabById from './components/Cab/GetCabById';
import AddCab from './components/Cab/AddCab';
import UpdateCab from './components/Cab/UpdateCab';
import DeleteCab from './components/Cab/DeleteCab';
import Login from './components/Login';
import CustomerDashboard from './components/Customer/CustomerDashboard';
import DriverDashboard from './components/Driver/DriverDashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import GetAllTrips from './components/Trip/GetAllTrips';
import GetTripById from './components/Trip/GetTripById';
import UpdateTrip from './components/Trip/UpdateTrip';
import AddTrip from './components/Trip/AddTrip';
import TripBill from './components/Trip/TripBill';
import GetAllCustomers from './components/Customer/GetAllCustomers';
import GetCustomerById from './components/Customer/GetCustomerById';
import UpdateCustomer from './components/Customer/UpdateCustomer';
import DeleteCustomer from './components/Customer/DeleteCustomer';
import Registration from './components/Customer/Registration';
import GetAllUsers from './components/GetAllUsers';
import GetAllDrivers from './components/Driver/GetAllDrivers';
import GetDriverById from './components/Driver/GetDriverById';
import AddDriver from './components/Driver/AddDriver';
import UpdateDriver from './components/Driver/UpdateDriver';
import DeleteDriver from './components/Driver/DeleteDriver';
import ContactUs from './components/Customer/CustomerContactUs';
import AdminCab from './components/Admin/AdminCab';
import AdminTrip from './components/Admin/AdminTrip';
import AdminDriver from './components/Admin/AdminDriver';
import AdminCabById from './components/Admin/AdminCabById';
import AdminDriverById from './components/Admin/AdminDriverById';
import AdminProfile from './components/Admin/AdminProfile';
import DriverProfile from './components/Driver/DriverProfile';
import CustomerProfile from './components/Customer/CustomerProfile';
import DriverContactUs from './components/Driver/DriverContactUs';
import AdminDriverUpdate from './components/Admin/AdminDriverUpdate';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        {/* Login */}

        <Route path="/" element={<Login />} />
        <Route path='/customer/dashboard' element={<CustomerDashboard />} />
        <Route path='/customer/profile/:userId' element={<CustomerProfile />} />
        <Route path="/contactUs" element={<ContactUs />} />
         <Route path="/driver/contactUs" element={<DriverContactUs/>} /> 
        <Route path='/driver/dashboard' element={<DriverDashboard />} />
        <Route path='/driver/profile/:userId' element={<DriverProfile />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />

        {/* User */}

        <Route path="/users/getall" element={<GetAllUsers />} />

        {/* Admin */}

        <Route path="/admin/cab" element={<AdminCab />} />
        <Route path="/admin/cabbyid/:cabId" element={<AdminCabById />} />
        <Route path="/admin/trip" element={<AdminTrip />} />
        <Route path="/admin/driver" element={<AdminDriver />} />
        <Route path="/admin/driverbyId/:userId" element={<AdminDriverById />} />
        <Route path="/admin/driver/update/:dUserID" element={<AdminDriverUpdate/>} />

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
