import s from './Category.module.css'
import bgImage from '../../../../img/ea97bdcdd9869cf654cc686e7968580e.jpg'


const Category = () => {
    return (
        <>
            <div className={s.category_container} style={{
                backgroundImage: `url(${bgImage})`
            }} >
                <div className={s.category_title}>
                    Hip-Hop
                </div>

            </div>
        </>
    )
}

export default Category