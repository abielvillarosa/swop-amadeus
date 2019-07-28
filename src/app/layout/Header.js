import React from 'react'
// import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
        <nav class="navbar" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-end navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-arrowless">
            Link
          </a>
      
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Account Info
            </a>
            <a class="navbar-item">
              Listings
            </a>
            <a class="navbar-item">
              Swop History
            </a>
          </div>
        </div>
      </nav>

    )
  }
}

export default Header