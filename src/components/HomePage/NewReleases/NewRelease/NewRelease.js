
import s from './NewRelease.module.css'


const NewRelease = (props) => {
    return (

        <div className={s.newReleaseBox}>
            <div><img className={s.songImg} src={props.img} alt=""/></div>
            <div className={s.songNameText}>{props.name}</div>
            <div className={s.songText}>{props.artist}</div>
        </div>


    )

}


export default NewRelease