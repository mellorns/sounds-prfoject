import s from './SidePage.module.css'
import TopSongs from "./TopSongs/TopSongs";
import Categories from "./Categories/Categories";

const SidePage =  (props) => {
    return (
        <div className={s.side_page}>
            <div className={s.topSongs_Container}>
                <TopSongs topSongs={props.topSongs}/>
            </div>
           <div className={s.categories_container}>
               <Categories />
           </div>
        </div>
    )
}

export default SidePage