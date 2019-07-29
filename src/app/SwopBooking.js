import React, { Component } from 'react'
// import { Card } from "react-bulma-components/full";
// import { Media, Image } from "react-bulma-components/full";
// import { Heading } from "react-bulma-components/full";
// import aircanlogo from './images/aircanada-logo.png';
// import westjetlogo from './images/westjet-logo.png';
import BlockchainClient from '../blockchain';
import APIService from '../api';
import Grid from './Grid';
import logo from './images/Logo.svg';
import { NavLink } from 'react-router-dom'

const api = new APIService()

const blockchain = new BlockchainClient()

class SwopBooking extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', redirect: false, result : ''};

    this.handleClick = this.handleClick.bind(this);
  };

  componentWillMount(){
    api.search().then( res => {
      return res.json()
     }).then( res => {    
       //Retrieve list of bookings 
       localStorage.setItem('result', JSON.stringify(res));
       this.setState({result : res});
     })
  }
  
  handleClick(e){
    e.preventDefault()
    let swopRefNo = this.state.result.data.swopRefNo

    blockchain.buyTicket(swopRefNo, 15000000).then( res => {
      console.log(res);
      this.setState({txHash : res});
    })
  };

  render() {
  return (
    <div>
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
            {/* <div class="is-overlay has-text-left" style={{ top: 152, left: 80 }}>
              <h4 class="subtitle is-4 has-text-white">Swop your flight!</h4>
            </div> */}
            <div id="grid2">
              <div id="c" class="right" style={{width: 45}}>
		        	  <p class="subtitle is-7 has-text-white"> </p>
		          </div>
              {/* <div id="a">
                <div class="is-overlay has-text-left" style={{ top: 152, left: 80 }}>
                  <h4 class="subtitle is-4 has-text-white">Swop your flight!</h4>
                </div>
              </div> */}
              <div id ="b">
                <form>
                <div className="field">
                  <label className="label">Origin</label>
                  <div className="control">
                    <input className="input" type="text" name="bookingid" onChange={this.handleChange} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Destination</label>
                  <div className="control">
                    <input className="input" type="text" name="bookingid" onChange={this.handleChange} required />
                  </div>
                </div>
                <div className="field">
                <NavLink className="navbar-item" to="/swop/swopbooking" exact>
                <span><a class="button is-black" style={{width: 200}}>Search</a></span>
                </NavLink>
                </div>
                </form>
              </div>
              <div id="e" class="right" style={{width: 25}}>
		        	  <p class="subtitle is-7 has-text-white"> </p>
		          </div>
              <div id ="d">
                <form>
                <div className="field">
                  <label className="label">Depart</label>
                  <div className="control">
                    <input className="input" type="text" name="bookingid" onChange={this.handleChange} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Return</label>
                  <div className="control">
                    <input className="input" type="text" name="bookingid" onChange={this.handleChange} required />
                  </div>
                </div>
                </form>
              </div>
              
            </div>
          </header>

        </section>
<Grid></Grid>
</div>

{/* <div>
  <p>This is the SwopBooking page</p>
  <tr>
  <td>
  <Card color="danger">
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={8} alt="4x4" src={aircanlogo} />
          </Media.Item>
          <Media.Item>
          <Heading size={6}>Amount: </Heading>
            <Heading size={6}>Origin: </Heading>
            <Heading size={6}>Departure Date/Time: </Heading>
            <Heading size={6}>Destination: </Heading>
            <Heading size={6}>Arrival Date/Time: </Heading>
          </Media.Item>
        </Media>
        <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Swop">
          Swop
        </Card.Footer.Item>
        </Card.Footer>
      </Card.Content>
    </Card>
    </td>
    <td>
    <Card>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={8} alt="4x4" src={westjetlogo} />
          </Media.Item>
          <Media.Item>
            <Heading size={6}>Amount: </Heading>
            <Heading size={6}>Origin: </Heading>
            <Heading size={6}>Departure Date/Time: </Heading>
            <Heading size={6}>Destination: </Heading>
            <Heading size={6}>Arrival Date/Time: </Heading>
          </Media.Item>
        </Media>
        <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Swop">
          Swop
        </Card.Footer.Item>
        </Card.Footer>
      </Card.Content>
    </Card>
    </td>
    <td>
    <Card>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={8} alt="4x4" src={westjetlogo} />
          </Media.Item>
          <Media.Item>
          <Heading size={6}>Amount: </Heading>
            <Heading size={6}>Origin: </Heading>
            <Heading size={6}>Departure Date/Time: </Heading>
            <Heading size={6}>Destination: </Heading>
            <Heading size={6}>Arrival Date/Time: </Heading>
          </Media.Item>
        </Media>
        <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Swop">
          Swop
        </Card.Footer.Item>
        </Card.Footer>
      </Card.Content>
    </Card>
    </td>
    </tr> 
</div> */}
</div>
)

  }
}
export default SwopBooking