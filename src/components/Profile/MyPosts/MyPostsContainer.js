import {changePostTextCreator, addPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onPostTextChange: (value) => {
            let action = changePostTextCreator(value)
            dispatch(action)
        },
        addPost : (newPostText) => {
            let action = addPostCreator(newPostText)
            dispatch(action)
        }

    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



export default MyPostsContainer