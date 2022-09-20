import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_ARTISTS = 'SET_ARTISTS'
const SET_ITEMS_COUNT = 'SET_ITEMS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    artists: [],
    currentPage: 1,
    pageSize: 10,
    totalItemsCount: 0,
    isFetching: false,
    followed: false,
    followingInProgress: []
}

const mediaLibraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                artists: state.artists.map(artist => {
                    if (artist.id === action.artistId) {
                        return {...artist, followed: true}
                    }
                    return artist
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                artists: state.artists.map(artist => {
                    if (artist.id === action.artistId) {
                        return {...artist, followed: false}
                    }
                    return artist
                })
            }
        case SET_ARTISTS:
            return {
                ...state, artists: action.artists
            }
        case SET_ITEMS_COUNT:
            return {
                ...state, totalItemsCount: action.totalItemsCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


export const followSuccess = (id) => {
    return {type: FOLLOW, artistId: id}
}
export const unfollowSuccess = (id) => {
    return {type: UNFOLLOW, artistId: id}
}
export const setArtists = (artists) => {
    return {type: SET_ARTISTS, artists: artists}
}
export const setTotalItemsCount = (totalItemsCount) => {
    return {type: SET_ITEMS_COUNT, totalItemsCount}
}
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId}
}



export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                return data
            })
            .then(data => {
                dispatch(setArtists(data.items))
                // this.props.setTotalItemsCount(response.data.totalCount)
                dispatch(setTotalItemsCount(100))
            })
    }

}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.unfollowUser(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        usersAPI.followUser(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }

}


export default mediaLibraryReducer