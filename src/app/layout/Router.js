import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Blog from './../Blog'
import PostBooking from './../PostBooking'
import SwopBooking from './../SwopBooking'

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/blog' component={Blog}/>
    <Route path='/post' component={PostBooking}/>
    <Route path='/swop' component={SwopBooking}/>
  </Switch>
)
export default Router