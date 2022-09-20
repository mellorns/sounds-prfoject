import s from './Artists.module.css'
import defaultImg from '../../../img/ea97bdcdd9869cf654cc686e7968580e.jpg'
import {NavLink} from "react-router-dom";

const Artist = (props) => {
    return (
        <div className={s.itemBox}>
            <NavLink to={'/profile/' + props.id}>
                <img className={s.artistImg} src={props.img != null ? props.img : defaultImg} alt=""/>
            </NavLink>
            <div>{props.artistName}</div>
            <div>{props.country}</div>
            {props.followed
                ? <button disabled={props.followingInProgress.some( id => id === props.id)}
                          onClick={() => props.unfollow(props.id) }> Unfollow </button>
                : <button disabled={props.followingInProgress.some( id => id === props.id)}
                          onClick={() =>  props.follow(props.id)}>Follow</button>}
        </div>
    )
}

export default Artist