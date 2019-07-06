import React from 'react'
import { Button } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom'


const Home = () => (
    <div>
        <NavLink className="navbar-item" to="/post" activeClassName="is-active" exact>
        <span><Button color="info" size="large" rounded outlined>Post Booking</Button></span>
        </NavLink>
        <NavLink className="navbar-item" to="/swop" activeClassName="is-active" exact>
        <span><Button color="primary" size="large" rounded outlined>Swop Booking</Button></span>
        </NavLink>
    </div>
)
export default Home