const initialState = {
    customers: [],
    customer: null,
    newCustomer: null,
    updatedCustomer: null,
    deleteCustomer: null

}

export default function CustomerReducer(state = initialState, action) {
    if (action.type === 'customers/getall') {
        return {
            ...state,
            customers: action.payload
        }
    }

    else if (action.type === 'customer') {
        return {
            ...state,
            customer: action.payload

        }
    }
    else if (action.type === 'customer/save') {
        return {
            ...state,
            newCustomer: action.payload
        }
    }
    else if (action.type === 'customer/update') {
        return {
            ...state,
            updatedCustomer: action.payload
        }
    }
    else if (action.type === 'customer/delete') {
        return {
            ...state,
            deleteCustomer: action.payload
        }
    }
    else {
        return state;
    }
}