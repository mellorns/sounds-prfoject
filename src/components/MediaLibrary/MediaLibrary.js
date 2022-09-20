import s from './MediaLibrary.module.css'
import Artist from "./Artists/Artists";
import React from "react";
import Preloader from "../common/Preloader/Preloader";


const MediaLibrary = (props) => {

    let totalPagesNumber = Math.ceil(props.totalItemsCount / props.pageSize)


    let pages = []
    for (let i = 1; i <= totalPagesNumber; i++) {
        pages.push(i)
    }
    return (
        <div className={s.container}>

            <div className={s.searchBoxContainer}>
                search box
            </div>
            <div className={s.artistsContainer}>
                <div>Choose Page</div>
                <div>{pages.map(p => <span onClick={() => props.onClickHandler(p)}
                                           className={props.currentPage === p && s.selectedPage }>{p}
                    </span>)}
                </div>
                {props.isFetching ? <Preloader /> : null}

                <div className={s.newContentContainer}>
                    {props.artists.map(artist => <Artist img={artist.photos.small}
                                                              artistName={artist.name}
                                                              followed={artist.followed}
                                                              country={artist.country}
                                                              id={artist.id}
                                                              follow={props.follow}
                                                              unfollow={props.unfollow}
                                                         followingInProgress={props.followingInProgress}
                    />)}
                </div>
            </div>

            <div>
                New albums
            </div>
        </div>
    )
}


export default MediaLibrary