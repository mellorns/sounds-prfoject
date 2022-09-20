import SidePage from "./SidePage";
import {connect} from "react-redux";

const SidePageContainer = (props) => {
    return (
        <>
            <SidePage {...props}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        topSongs: state.sideBar.topSongs
    }
}

export default connect(mapStateToProps)(SidePageContainer)