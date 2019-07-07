import React from 'react'
import { Button } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom'
import swoplogo from './images/swoplogo.gif';

const Home = () => (
    <div class="columns is-mobile is-centered is-vcentered">
        <td>
            <br></br>
            <br></br>
        <tr>
         <img src={swoplogo} alt="logo" />
         <br></br>
         <br></br>
        </tr>
        <tr></tr>
        <tr>
        <span>
        <td>
        <NavLink className="navbar-item" to="/swop/postbooking" activeClassName="is-active" exact>
        <span><Button color="info" size="large" rounded outlined>Post Booking</Button></span>
        </NavLink>
        </td>
        <td>
        <NavLink className="navbar-item" to="/swop/swopbooking" activeClassName="is-active" exact>
        <span><Button color="info" size="large" rounded outlined>Swop Booking</Button></span>
        </NavLink>
        </td>
        </span>
        </tr>
        </td>
    </div>
)
export default Home