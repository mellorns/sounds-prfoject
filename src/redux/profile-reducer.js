import { profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT'
const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let initialState = {
    posts: [
        {message: 'Hello1', id: 1},
        {message: 'Hello2', id: 2},
        {message: 'Hello3', id: 3},
        {message: 'Hello4', id: 4},
        {message: 'Hello5', id: 5}
    ],
    newPostText: '123',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POST_TEXT:
            return  {
                ...state,
                newPostText: action.text
            }
        case ADD_POST: {
            let post = {
                message: action.newPostText,
                id: 6
            }
            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            }
        }
        case SET_PROFILE:
            return {...state, profile: action.profile}
      case SET_PROFILE_STATUS:
            return {...state, status: action.status}

        default:
            return state
    }
}


export let addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})
export let changePostTextCreator = (text) => ({type: CHANGE_POST_TEXT, text})
export let setProfile = (profile) => ({type: SET_PROFILE, profile})
export let setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(setProfile(null))
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setProfile(response.data))
            })
    }
}
export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(response => {
                dispatch(setProfileStatus(response.data))
            })
    }
}
export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.setProfileStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}




export default profileReducer