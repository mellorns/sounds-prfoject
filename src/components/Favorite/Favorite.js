import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const Favorite = (props) => {


    return (
        <div>
            <h1>Favorite</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}




export default withAuthRedirect(connect(mapStateToProps, {})(Favorite))