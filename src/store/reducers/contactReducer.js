import {
    FETCH_CONTACTS_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_DATA_REQUEST, SELECT_CONTACT,
} from "../actions/actionTypes";

const initialState = {
    contacts: {},
    selectedContactId: null,
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

        case SELECT_CONTACT:
            return {
                ...state,
                selectedContactId: action.id,
            };

        default:
            return state;
    }
};

export default contactReducer;
