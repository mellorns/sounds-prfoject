import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {


    if(!props.profile) {
        return <Preloader />
    }
    return(
        <div>
            <div className={s.profileInfoBlock}>
                <ProfileInfo status={props.status} updateProfileStatus={props.updateProfileStatus} profile={props.profile}/>
            </div>

            <MyPostsContainer />
        </div>
    )
}

export default Profile