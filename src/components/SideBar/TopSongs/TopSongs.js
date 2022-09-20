import s from './TopSongs.module.css'
import Song from "./Song/Song";



const TopSongs =  (props) => {



    return (
            <div className={s.container}>
                <div className={s.title_text}>
                    Топ-песен
                </div>
                <div className={s.songs_container}>
                    {props.topSongs.map( (song, index) => <Song songName={song.songName}
                                                       artistName={song.artistName}
                                                       songImage={song.songImage}
                                                       songTime={song.songTime}
                                                       liked={song.liked}
                                                                index={index}
                        />)}
                </div>
            </div>
    )
}

export default TopSongs