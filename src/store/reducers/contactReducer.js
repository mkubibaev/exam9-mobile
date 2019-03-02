import {FETCH_CONTACTS_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST} from "../actions/actionTypes";

const initialState = {
    contacts: {},
    error: null,
    loading: true
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.contacts,
                loading: false,
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        default:
            return state;
    }
};

export default contactReducer;
