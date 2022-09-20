import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import musicIcon from '../../img/Untitled.png'

const Navbar = (props) => {

    let ActiveLink = ({isActive}) => isActive ? s.active : s.item

    return (

        <div className={s.navbarContainer}>

            <div className={s.personalMusicBox}>
                <img className={s.musicIcon} src={musicIcon} alt="Иконка ноты"/>
                <div className={s.linkToPersonalMusic}>Твоя музыка</div>
            </div>


            <nav className={s.nav}>

                <NavLink to='/home' className={ActiveLink}>Home</NavLink>


                <NavLink to='/favorite' className={ActiveLink}>Favorite</NavLink>


                <NavLink to='/media' className={ActiveLink}>Media</NavLink>


                <NavLink to='/profile' className={ActiveLink}>Profile</NavLink>


                {props.isAuth === false
                    ? <NavLink to='/login' className={ActiveLink}>Login</NavLink>
                    : <div>{props.login}<br/>
                        <button onClick={props.logout}>logout</button>
                    </div>}


            </nav>
        </div>


    )
}

export default Navbar