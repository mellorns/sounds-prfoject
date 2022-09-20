import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>

            <div>
                <img className={s.postImg} src="https://pbs.twimg.com/profile_images/1478893871199186945/1mA6tezL_400x400.jpg" alt="123"/>
                <span className={s.message}>{props.message}</span>
            </div>

        </div>
    )
}

export default  Post