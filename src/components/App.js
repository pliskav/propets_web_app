/* eslint-disable max-len */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import {
rootPath,
homePath,
profilePath,
searchPath,
favoritesPath,
searchMessagePath,
lostMessages,
foundMessages,
authPath,
landingPath,
messageDetailPath,
newPostPath,
loadFilePath,
} from '../utils/routes'

import UserProfile from './UserProfile'
import MessageDetails from './MessageDetails';
import Favorites from './Favorites';
import Search from './Search';
import SearchMessageDetail from './SearchMessageDetails';
import Lost from './Lost';
import Found from './Found';
import Auth from './Auth';
import Landing from './Landing';
import Navbar from './Navbar';
import Messages from './Messages'
import NewPost from './NewPost';

import '../styles/navbar.css'
import User from './User';
import LoadFile from './LoadFile';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false,
    }
  }

  componentDidMount() {
    if (localStorage.getItem('X-Authorization') !== null) {
      this.setState({
        showNav: true,
      })
    }
  }

  render() {
    const { showNav } = this.state
    return (
      <>
        <div className="app">
          {showNav && (<Navbar />)}
          <div className="content-wrapper">
            <Switch>
              <Route path={authPath} component={Auth} />
              <Route path={landingPath} component={Landing} />
              <Route path={[rootPath, homePath]} render={() => (localStorage.getItem('X-Authorization') !== null ? (<Messages />) : (<Redirect to={landingPath} />))} exact />
              <Route path={profilePath} component={UserProfile} />
              <Route path={messageDetailPath} component={MessageDetails} />
              <Route path={lostMessages} component={Lost} exact />
              <Route path={foundMessages} component={Found} exact />
              <Route path={searchMessagePath} component={SearchMessageDetail} />
              <Route path={favoritesPath} component={Favorites} />
              <Route path={searchPath} component={Search} />
              <Route path={newPostPath} component={NewPost} />
              <Route path={loadFilePath} component={LoadFile} />
            </Switch>
          </div>
        </div>
      </>
    )
  }
}

export default App
