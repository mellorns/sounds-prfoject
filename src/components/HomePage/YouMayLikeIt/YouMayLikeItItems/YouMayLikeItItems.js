import s from './YouMayLikeItItems.module.css'
import YouMayLikeItItem from "./YouMayLikeItItem/YouMayLikeItItem";





const YouMayLikeItItems = (props) => {
    return (
        <div className={s.container}>

                {props.youMayLikeIt.map( item => <YouMayLikeItItem img={item.img} songName={item.songName} artist={item.artist}/>)}

        </div>
    )
}

export default YouMayLikeItItems