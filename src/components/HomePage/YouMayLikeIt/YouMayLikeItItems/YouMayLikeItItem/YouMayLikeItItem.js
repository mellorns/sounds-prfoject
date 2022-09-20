import s from './YouMayLikeItItem.module.css'

const YouMayLikeItItem = (props) => {
    return (

            <div className={s.itemBox}>
                <img className={s.itemImg} src={props.img} alt=""/>
                <div className={s.songNameText}>{props.songName}</div>
                <div className={s.songText}>{props.artist}</div>
            </div>

    )
}

export default YouMayLikeItItem