import React, { Component } from 'react'
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
    api.verifyTicket({bookingRefNo : this.state.value}).then( res => {
     return res.json()
    }).then( res => {    
      // Store booking details on local storage to pass to PostDetails component
      localStorage.setItem('result', JSON.stringify(res));
      this.setState({redirect: true, result : res});
    })
  };

  render() {
    if (this.state.redirect) {
    return <Redirect push to={{pathname: "/swop/postdetails", state: {result: (this.state.res)}}}/>;
    }
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <td>
          <tr>
            <p>Enter your original <strong>Booking ID</strong> to retrieve your details from your airline.</p>
            <br></br>
          </tr>
          <div className="box">
            <form>
              <div className="field">
                <label className="label">Booking ID</label>
                <div className="control">
                  <input className="input" type="text" name="bookingid" onChange={this.handleChange} required />
                </div>
              </div>
              <div className="field">
                <label className="label">Email ID</label>
                <div className="control">
                  <input className="input" type="email" name="emailid" required />
                </div>
              </div>
              <NavLink className="navbar-item" to="/swop/postdetails" activeClassName="is-active" exact>
              <button className="button is-block is-info is-fullwidth" onClick={this.handleClick}>Submit</button>
              </NavLink>
            </form>
          </div>
          </td>
        </div>
      </div>
    </div>
  );}
};

export default PostBooking;
