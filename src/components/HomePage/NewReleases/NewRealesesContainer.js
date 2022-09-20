import {connect} from "react-redux";
import NewReleases from "./NewRealeses";


const mapStateToProps = (state) => {
    return {
        newReleases: state.homePage.newReleases
    }
}


const NewReleasesContainer = connect(mapStateToProps)(NewReleases)

export default NewReleasesContainer