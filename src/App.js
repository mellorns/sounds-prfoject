import './App.css';
import HomePage from "./components/HomePage/HomePage";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MediaLibraryContainer from "./components/MediaLibrary/MediaLibraryContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Login from "./components/Login/Login";
import Favorite from "./components/Favorite/Favorite";
import SidePageContainer from "./components/SideBar/SidePageContainer";
import React from "react";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <NavbarContainer/>
                    <SidePageContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/profile' element={<ProfileContainer/>}>
                                <Route path=':userId' element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/home' element={<HomePage/>}/>
                            <Route path='/media' element={<MediaLibraryContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/favorite' element={<Favorite/>}/>
                        </Routes>
                    </div>
                    <div className='player-container'>
                        Player
                    </div>
                </div>

            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App);