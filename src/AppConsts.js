export const BASE_URL = "http://localhost:8080/api";

//ACTION CONSTRAINTS FOR LOGIN
export const LOGIN = 'login';
export const LOGOUT = 'logout';

//ACTION CONSTRAINTS FOR TRIPBOOKING
export const FETCH_TRIP_ALL = 'trip/getAll';
export const FETCH_TRIP_BYID = 'trip/getById';
export const TRIP_UPDATE = 'trip/update';
export const ADD_TRIP = 'trip/add';
export const TRIP_BILL = 'trip/bill';

//ACTION CONSTRAINTS FOR DRIVERS
export const DRIVER_FETCH_ALL = "driver/fetchall";
export const DRIVER_FETCH_BYID = "driver/fetch";
export const DRIVER_SAVE = "driver/save";
export const DRIVER_UPDATE = "driver/update";
export const DRIVER_DELETE = "driver/delete";

//ACTION CONSTRAINTS FOR CAB
export const CAB_FETCH_ALL ='cab/all'; 
export const CAB_FETCH_BY_ID = 'cab/getById';
export const CAB_SAVE="cab/save";
export const CAB_UPDATE="cab/update";
export const CAB_DELETE="cab/delete";

//ACTION CONSTRAINTS FOR CUSTOMER
export const CUSTOMERS_GET_ALL  = "customers/getall";
export const CUSTOMER  = "customer";
export const CUSTOMER_SAVE = 'customer/save';
export const CUSTOMER_UPDATE= 'customer/update';
export const CUSTOMER_DELETE= 'customer/delete';

//ACCTION CONSTRAINTS FOR USERS
export const USERS_GET_ALL  = "users/getall";