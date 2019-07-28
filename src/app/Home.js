import React, { Component } from 'react'
import { Button } from "react-bulma-components/full";
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router';
import APIService from '../api'
import logo from './images/Logo.svg';
import herobanner from './images/herobanner.png';
import Grid from './Grid';
import Grid2 from './Grid';
// import Modal from './Modal';
import { Modal } from 'react-bulma-components';

const api = new APIService();

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Home extends Component {
  // state = { open: false };
  constructor(props) {
    super(props);
    this.state = {open: false, value: '', redirect: false, result : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(e) {
    this.setState({value: e.target.value});
    console.log(e.target.value);
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
    render () {
      if (this.state.redirect) {
        return <Redirect push to={{pathname: "/swop/postdetails", state: {result: (this.state.res)}}}/>;
        }
    return (
      <div>
        <section class="hero is-halfheight has-bg-img">
          <div class="hero-head heading has-text-weight-bold">
            <div class="columns is-mobile is-marginless">
              <div class="column left">
                <figure class="navbar-item image">
                  <img src={ logo } style={{width: 50 , height: 200 }}></img>
                </figure>
              </div>
              <div class="column right">
                <figure class="navbar-item image has-text-white center">
                  Sign In 
                  <span class="icon is-large">
                  <i class="fas fa-user" style={{width: 50 , height: 50 }}></i>
                  </span>
                </figure>
              </div>
            </div>
          </div>

          <header class="hero-body">
            <div class="is-overlay has-text-left" style={{ top: 152, left: 80 }}>
              <h4 class="subtitle is-4 has-text-white">Swop your flight!</h4>
            </div>
            <div id="grid">
            <div id="c" class="left" style={{width: 45}}>
		        	<p class="subtitle is-7 has-text-white"> </p>
		        </div>
              <div id="a" class="left">
                {/* <NavLink className="navbar-item" to="/swop/postbooking" activeClassName="is-active" exact> */}
                {/* <NavLink className="navbar-item" activeClassName="is-active" exact> */}
                <span><a class="button is-white" style={{width: 300}} onClick={() => this.setState({ open: true })}>Post Booking</a></span>
                {/* <Modal show={this.state.open} onClose={() => this.setState({ open: false })} style={customStyles}>
                  <div class="modal-background"></div>
                  <div class="modal-card">
                    <header class="modal-card-head">
                      <p class="modal-card-title" alignment="center">Verification</p>
                      <p class="modal-card-title" alignment="center">Enter your original <strong>Booking ID</strong> to retrieve your details from your airline.</p>
                      <button class="delete" aria-label="close">Hello</button>
                    </header>
                    <section class="modal-card-body">
                      <form>
                        <div> Booking ID </div>
                        <input />
                        <div> Email Address </div>
                        <input />
                      </form>
                    </section>
                    <footer class="modal-card-foot">
                      <button class="button is-success">Submit</button>
                      <button class="button">Cancel</button>
                    </footer>
                  </div>
                </Modal> */}
                {/* </NavLink> */}
              </div>
              <div id="b">
                <NavLink className="navbar-item" to="/swop/swopbooking" exact>
                <span><a class="button is-black" style={{width: 300}}>Swop Booking</a></span>
                </NavLink>
              </div>
            </div>
          </header>

        </section>
        <section class="main">
          <div>
          <Grid></Grid>
          </div>
          {/* <div>
          <Grid2></Grid2>
          </div> */}
      <div>
         {/* <button onClick={() => this.setState({ open: true })}>Click Me</button> */}
         <Modal show={this.state.open} onClose={() => this.setState({ open: false })} style={customStyles}>
         <div class="modal-background"></div>
         <div class="modal-card">
         {/* <header class="modal-card-head">
           <div>
      <p class="modal-card-title" alignment="center">Verification</p>
      <p>Enter your original <strong>Booking ID</strong> to retrieve your details from your airline.</p>
      </div>
      <button class="delete" aria-label="close">Hello</button>
    </header> */}
    <section class="modal-card-body">
    <div>
      <p class="modal-card-title" alignment="center">Verification</p>
      <p>Enter your original <strong>Booking ID</strong> to retrieve your details from your airline.</p>
      <br></br>
      </div>
          <form>
            <div className="field">
                <label className="label">Booking ID</label>
                <div className="control">
                  <input className="input" type="text" name="bookingid" onChange={this.handleChange} required />
                </div>
            </div>
            <div> Email Address </div>
            <input className="input"/>
          </form>
    </section>
    <footer class="modal-card-foot">
      <NavLink className="navbar-item" to="/swop/postdetails" activeClassName="is-active" exact>
        <button className="button is-block is-info is-fullwidth" onClick={this.handleClick}>Submit</button>
      </NavLink>
      <button class="button" onClick={() => this.setState({ open: false })}>Cancel</button>
    </footer>
          </div>
         </Modal>
      </div>
        </section>
      </div>
)}
}
export default Home