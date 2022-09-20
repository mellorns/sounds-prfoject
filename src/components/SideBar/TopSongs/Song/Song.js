import s from './Song.module.css'
import { FcLikePlaceholder } from "react-icons/fc";
import { CgMore } from "react-icons/cg";




const Song = (props) => {
        let i = props.index + 1
    return (
        <div className={s.songBox}>
            <div className={s.song_number}>
                { i}
            </div>
            <div >
                <img className={s.songImg} src={props.songImage} alt=""/>
            </div>
            <div className={s.song_description}>
                <div className={s.song_name}>{props.songName}</div>
                <div className={s.artist_name}>{props.artistName}</div>
            </div>
            <div className={s.song_time}>
                {props.songTime}
            </div>
            <div className={s.loveicon}>
                <FcLikePlaceholder />
            </div>
            <div className={s.more_options}>
                <CgMore />
            </div>
        </div>
    )
}

export default Song