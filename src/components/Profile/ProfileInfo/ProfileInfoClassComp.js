import defaultProfileImg from '../../../img/single3_image.png'
import React from 'react'

class ProfileInfoClassComp extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode() {

        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange(value) {
        this.setState({
            status: value
        })
    }

    render() {

        return (
            <>
                <img src={this.props.profile.photos.large ? this.props.profile.photos.large : defaultProfileImg}
                     alt=""/>

                <div>
                    {this.state.editMode ? <div>
                            <input autoFocus={true}
                                   onChange={(e) => this.onStatusChange(e.currentTarget.value)}
                                   onBlur={() => this.deactivateEditMode()} value={this.state.status}/>
                        </div>
                        : <div>
                            <span onDoubleClick={() => this.activeEditMode()}>{this.props.status || '---'}</span>
                        </div>}
                </div>
            </>
        )
    }
}

export default ProfileInfoClassComp