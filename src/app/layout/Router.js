import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Blog from './../Blog'
import PostBooking from './../PostBooking'
import SwopBooking from './../SwopBooking'
import PostDetails from './../PostDetails'


const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/blog' component={Blog}/>
    <Route path='/post' component={PostBooking}/>
    <Route path='/swop' component={SwopBooking}/>
    <Route path='/postdetails' render={(props) => <PostDetails {...props} isAuthed={true} />} component={PostDetails}/>
  </Switch>
)
export default Router