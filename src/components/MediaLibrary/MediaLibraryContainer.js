import {connect} from "react-redux";
import MediaLibrary from "./MediaLibrary";
import {
    follow, getUsers,

    unfollow
} from "../../redux/media-library-reducer";
import React from "react";


class MediaLibraryContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onClickHandler = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }


    render() {
        return (

            <MediaLibrary totalItemsCount={this.props.totalItemsCount}
                          pageSize={this.props.pageSize}
                          artists={this.props.artists}
                          currentPage={this.props.currentPage}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                          onClickHandler={this.onClickHandler}
                          followingInProgress={this.props.followingInProgress}
            />


        )
    }
}


const mapStateToProps = (state) => {
    return {
        artists: state.mediaLibraryPage.artists,
        totalItemsCount: state.mediaLibraryPage.totalItemsCount,
        currentPage: state.mediaLibraryPage.currentPage,
        pageSize: state.mediaLibraryPage.pageSize,
        isFetching: state.mediaLibraryPage.isFetching,
        followingInProgress: state.mediaLibraryPage.followingInProgress

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followAC(id))
//         },
//         unfollow: (id) => {
//             dispatch(unfollowAC(id))
//         },
//         setArtists: (artists) => {
//             dispatch(setArtistsAC(artists))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalItemsCount: (totalItemsCount) => {
//             dispatch(setTotalItemsCount(totalItemsCount))
//         },
//         toggleIsFetching: (isFetching) => {
//
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    getUsers, follow, unfollow
})(MediaLibraryContainer)