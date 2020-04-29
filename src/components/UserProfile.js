import React from 'react'
import ProfileActivities from './ProfileActivities'
import ProfileDetails from './ProfileDetails'


export default class UserProfile extends React.Component {
  constructor(props) {
    super()
    this.state = {
      activityMode: false,
    }
  }

  toggleViewHandler = () => {
    const { activityMode } = this.state
    const toggle = !activityMode
    this.setState({
      activityMode: toggle,
    })
  }

  render() {
    const { activityMode } = this.state
  return (
    <div>
      <button type="button" onClick={this.toggleViewHandler}>Profile Details</button>
      <button type="button" onClick={this.toggleViewHandler}>Profile Activities</button>
      {activityMode ? <ProfileActivities /> : <ProfileDetails />}
    </div>
    )
  }
}


  UserProfile.propTypes = {}