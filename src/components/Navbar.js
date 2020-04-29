import React from 'react'
import { NavLink } from 'react-router-dom'

import {
 homePath, profilePath, favoritesPath, lostMessages, foundMessages, newPostPath, loadFilePath,
} from '../utils/routes'
import User from './User'

import '../styles/navbar.css'

const Navbar = () => (
  <div className="sidebar-wrapper">
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <NavLink to={homePath} exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={profilePath}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={lostMessages}>
              Lost
            </NavLink>
          </li>
          <li>
            <NavLink to={foundMessages}>
              Found
            </NavLink>
          </li>
          <li>
            <NavLink to={favoritesPath}>
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to={newPostPath}>
              Add Post
            </NavLink>
          </li>
          <li>
            <NavLink to={loadFilePath}>
              Load Image
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <User />
    <div className="navigation-logout">
      <nav>
        <ul>
          <li>
            <NavLink to={homePath} exact>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )

export default Navbar