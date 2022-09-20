import song1_image from "../img/single2_image.png";


let initialState = {
    topSongs: [
        {songName: 'Lover Boy', artistName: 'Dora', songImage: song1_image, songTime: '3.30', liked: false},
        {songName: 'Lover Boy', artistName: 'Dora', songImage: song1_image, songTime: '3.30', liked: false},
        {songName: 'Lover Boy', artistName: 'Dora', songImage: song1_image, songTime: '3.30', liked: false},
        {songName: 'Lover Boy', artistName: 'Dora', songImage: song1_image, songTime: '3.30', liked: false},
        {songName: 'Lover Boy', artistName: 'Dora', songImage: song1_image, songTime: '3.30', liked: false}
    ]
}

const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}


export default sideBarReducer