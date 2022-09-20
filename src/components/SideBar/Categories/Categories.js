import Category from "./Category/Category";
import s from './Categories.module.css'
import {CgMore} from "react-icons/cg";

const Categories = () => {
    return (
        <>
            <div className={s.categories_top}>
                <div className={s.categories_text}>
                    Категории
                </div>
                <div className={s.categories_more}>
                    <CgMore />
                </div>

            </div>
            <div className={s.categories_container}>
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </div>
        </>
    )
}

export default Categories