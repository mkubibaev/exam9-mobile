import {FETCH_CONTACTS_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST} from "./actionTypes";
import axios from '../../axios-contacts';


export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

export const fetchContactsSuccess = contacts => ({type: FETCH_CONTACTS_SUCCESS, contacts});

export const fetchContacts = () => {
    return dispatch => {
        dispatch(fetchDataRequest());

        axios.get('contacts.json').then(response => {
            dispatch(fetchContactsSuccess(response.data));
        }, error => {
            dispatch(fetchDataFailure(error));
        });
    }
};
