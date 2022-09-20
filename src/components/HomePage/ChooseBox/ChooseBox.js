import s from './ChooseBox.module.css'
import backgroundImage from '../../../img/search-box-image.png'

const ChooseBox = () => {
  return (
      <div className={s.container}>

            <div className={s.bannerBox} style={  {backgroundImage: `url(${backgroundImage})`}   }>

            </div>
      </div>
  )
}

export default ChooseBox