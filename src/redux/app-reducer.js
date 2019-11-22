import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export const initializedSucces = () => ({type: INITIALIZED_SUCCES});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    debugger;
    //dispatch(somethingelse());
    //dispatch(somethingelse());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSucces());
    });
}

export default appReducer;