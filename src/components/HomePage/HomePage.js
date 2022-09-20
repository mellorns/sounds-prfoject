import s from './HomePage.module.css'
import ChooseBox from "./ChooseBox/ChooseBox";
import NewReleasesContainer from "./NewReleases/NewRealesesContainer";
import YouMayLikeIt from "./YouMayLikeIt/YouMayLikeIt";

const HomePage = () => {
    return (
        <div className={s.homeWrapper}>

            <ChooseBox />

            <NewReleasesContainer />

            <YouMayLikeIt />

            {/*<div>*/}
            {/*    RecentlyListened*/}
            {/*</div>*/}

        </div>
    )
}

export default HomePage