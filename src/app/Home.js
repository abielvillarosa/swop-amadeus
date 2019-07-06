import React from 'react'
import { Button } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom'


const Home = () => (
    <div class="columns is-mobile is-centered is-vcentered">
        <header>
        <tr>
        <td>
        <NavLink className="navbar-item" to="/swop/postbooking" activeClassName="is-active" exact>
        <span><Button color="info" size="large" rounded outlined>Post Booking</Button></span>
        </NavLink>
        </td>
        <td>
        <NavLink className="navbar-item" to="/swop/swopbooking" activeClassName="is-active" exact>
        <span><Button color="primary" size="large" rounded outlined>Swop Booking</Button></span>
        </NavLink>
        </td>
        </tr>
        </header>
    </div>
)
export default Home