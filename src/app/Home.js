import React from 'react'
import { Button } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom'


//import { NavLink } from 'react-router-dom'
//import { Button } from "react-bulma-components/full";

const Home = () => (
    <div>
        <NavLink className="navbar-item" to="/post" activeClassName="is-active" exact>
        <span><Button color="danger" size="large" rounded outlined>Post Booking</Button></span>
        </NavLink>
        <NavLink className="navbar-item" to="/swop" activeClassName="is-active" exact>
        <span><Button color="danger" size="large" rounded outlined>Swop Booking</Button></span>
        </NavLink>
    </div>
)
export default Home