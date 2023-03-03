const initialState = {
    users: [],
    user: null
}

export default function UserReducer(state = initialState, action) {
    if (action.type === 'users/getall') {
        return {
            ...state,
            users: action.payload
        }
    }


    else {
        return state;
    }
}