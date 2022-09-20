import s from './YouMayLikeIt.module.css'
import YouMayLikeItItems from "./YouMayLikeItItems/YouMayLikeItItems";
import {connect} from "react-redux";


const YouMayLikeIt = (props) => {
    return (
        <div className={s.container}>
            <div className={s.text}>
                <div className={s.mayLikeText}>
                    Возможно вам понравится
                </div>
                <div className={s.showAllText}>
                    Показать все
                </div>

            </div>
            <YouMayLikeItItems  {...props}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        youMayLikeIt: state.homePage.youMayLikeIt
    }
}


export default connect(mapStateToProps)(YouMayLikeIt)