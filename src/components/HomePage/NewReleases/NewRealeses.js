import s from './NewRealeses.module.css'
import NewRelease from "./NewRelease/NewRelease";
import { GoPlay } from "react-icons/go";


const NewReleases = (props) => {
    return (
        <div className={s.container}>
            <div className={s.playBtn}>
                New Release <span>{<GoPlay />}</span>
            </div>
            <div className={s.itemsContainer}>

                {props.newReleases.map( song => {
                    return <NewRelease name={song.name} artist={song.artist} img={song.img}/>
                })}
            </div>
        </div>


    )
}

export default NewReleases