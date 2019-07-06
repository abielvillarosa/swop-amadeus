import React, { Component } from 'react'
// import { Field, Label, Control, Input, Card } from "react-bulma-components/full";
// import { Heading, Columns, Form } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom'
import APIService from '../api'
import { Redirect } from 'react-router';

const api = new APIService()

class PostBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', redirect: false, result : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(e) {
    this.setState({value: e.target.value});
  };

  handleClick(e){
    e.preventDefault()
  
    console.log('click dtooo')
    api.verifyTicket({bookingRefNo : this.state.value}).then( res => {
     return res.json()
    }).then( res => {
      console.log(res)
      this.setState({redirect: true, result : res});
      // this.setState({redirect: true});
      localStorage.setItem('refno',
      JSON.stringify(this.state.value));
      localStorage.setItem('result',
      JSON.stringify(this.state.result));

      console.log('localsltorage dtoooo: ' + localStorage.getItem('result'))
    })
  };

  render() {
    if (this.state.redirect) {
    return <Redirect push to={{pathname: "/postdetails", state: {result: (this.state.res)}}}/>;
    }
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form>
              <div className="field">
                <label className="label">Booking ID</label>
                <div className="control">
                  <input className="input" type="text" name="bookingid" onChange={this.handleChange} defaultValue="BKN#7c5471ad" required />
                </div>
              </div>
              <div className="field">
                <label className="label">Email ID</label>
                <div className="control">
                  <input className="input" default="a@a.com" type="email" name="emailid" required />
                </div>
              </div>
              <NavLink className="navbar-item" to="/postdetails" activeClassName="is-active" exact>
              <button className="button is-block is-info is-fullwidth" onClick={this.handleClick}>Submit</button>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );}
};

export default PostBooking;
