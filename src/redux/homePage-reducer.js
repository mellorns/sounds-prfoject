import img1_single from '../img/single1_image.png'
import img2_single from '../img/single2_image.png'
import img3_single from '../img/single3_image.png'
import img4_single from '../img/single4_image.png'
import img5_single from '../img/single5_image.png'
import artist1_image from "../img/atrist1_image.png";
import artist2_image from "../img/atrist2_image.png";
import artist3_image from "../img/atrist3_image.png";
import artist4_image from "../img/atrist4_image.png";
import artist5_image from "../img/atrist5_image.png";
import artist7_image from "../img/atrist7_image.png";
import artist6_image from "../img/atrist6_image.png";




let initialState = {
    newReleases: [
        {
            img: img1_single,
            name: 'LoverBoy',
            artist: 'Дора'
        },
        {
            img: img2_single,
            name: 'astral step',
            artist: 'Shadowraze'
        },
        {
            img: img3_single,
            name: 'в темноте',
            artist: 'КОСМОНАВТОВ НЕТ, дипинс'
        },
        {
            img: img4_single,
            name: 'Tipsy',
            artist: 'Пойдем гулять'
        },
        {
            img: img5_single,
            name: 'Till i Collapse',
            artist: 'Eminem'
        }
    ],
    youMayLikeIt:
        [
            {img: artist1_image, songName: 'Пойдем гулять', artist: 'ТИПСИ'},
            {img: artist2_image, songName: 'Сахарная вата', artist: 'Pyrokinesis'},
            {img: artist3_image, songName: 'Перезаряжай', artist: 'три дня дождя'},
            {img: artist4_image, songName: 'Здесь были', artist: 'ГРЕЧКА'},
            {img: artist5_image, songName: 'ТПМ', artist: 'КОСМОНАВТОВ НЕТ'},
            {img: artist7_image, songName: 'На твиче', artist: 'нексюша'},
            {img: artist6_image, songName: 'Мне 20', artist: 'просто Лера'}
        ]

}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}


export default homePageReducer