import {authAPI} from "../api/api";
import {getAuthUserData, setAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const initializeSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())

        Promise.all([promise]).then( () =>
            dispatch(initializeSuccess())
        )

    }
}


export default appReducer


