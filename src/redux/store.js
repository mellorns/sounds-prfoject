import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from "./profile-reducer";
import homePageReducer from "./homePage-reducer";
import mediaLibraryReducer from "./media-library-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'
import sideBarReducer from "./sideBar-reducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    homePage: homePageReducer,
    mediaLibraryPage: mediaLibraryReducer,
    auth: authReducer,
    sideBar: sideBarReducer,
    form: formReducer,
    app: appReducer
})



let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store