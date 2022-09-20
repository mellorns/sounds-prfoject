import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";




const MyPostsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea}  validate={[required]}  name={'newPostText'} />
            <button>Add post</button>
        </form>
    )
}


const MyPostsReduxForm = reduxForm({form: 'addPostsForm'})(MyPostsForm)

const MyPosts = (props) => {
    let onPostTextChange = (e) => {
        let value = e.target.value
        props.onPostTextChange(value)
    }
    let addPost = (value) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={s.postsContainer}>
            <MyPostsReduxForm onSubmit={addPost} onPostTextChange={onPostTextChange} newPostText={props.newPostText}/>

            {props.posts.map(post => {
              return  <Post message={post.message}/>
            })}
        </div>
    )
}

export default MyPosts