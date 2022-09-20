import defaultProfileImg from '../../../img/single3_image.png'
import React, {useEffect, useState} from 'react'

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    const onStatusChange = (value) => {
        setStatus(value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return (
        <>
            <img src={props.profile.photos.large ? props.profile.photos.large : defaultProfileImg}
                 alt=""/>

            <div>
                {editMode ? <div>
                        <input autoFocus={true}
                               onChange={(e) => onStatusChange(e.currentTarget.value)}
                               onBlur={() => deactivateEditMode()} value={status}/>
                    </div>

                    : <div>
                        <span onDoubleClick={() => activeEditMode()}>{props.status || '---'}</span>
                    </div>}
            </div>
        </>
    )

}

export default ProfileInfo