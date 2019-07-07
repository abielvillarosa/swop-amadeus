import React, { Component } from 'react'
import { Media, Image, Card, Heading, Content } from "react-bulma-components/full";
import aircanlogo from './images/aircanada-logo.png';
import BlockchainClient from '../blockchain'

const blockchain = new BlockchainClient()

class PostDetails extends Component {
  constructor(props){
    super(props);
    this.state = {value: '', redirect: false, result : '', txHash : ''};
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount(){
    // Get Booking Details from Local Storage
    let result = JSON.parse(localStorage.getItem('result'));
    this.setState({result: result})
  }

  handleClick(e){
    e.preventDefault()
    let swopRefNo = this.state.result.data.swopRefNo

    blockchain.postTicket(swopRefNo, 15000000).then( res => {
      console.log(res);
      this.setState({txHash : res});
    })
  };

  render() {
    return (
  <div class="columns is-mobile is-centered is-vcentered">
    <td>
      <br></br>
      <br></br>
    <tr>
      <p>Please review your booking details below and click on <strong>Post</strong> once all the details have been verified.</p>
      <br></br>
    </tr>
    <tr>
    <Card>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={15} alt="4x4" src={aircanlogo} />
          </Media.Item>
          <Media.Item>
            <Heading size={6}>Swop Reference No: {this.state.result.data.swopRefNo}</Heading>
            <Heading size={6}>Amount: {this.state.result.data.amount}</Heading>
            <Heading size={6}>Origin: {this.state.result.data.origin}</Heading>
            <Heading size={6}>Departure Date/Time: {this.state.result.data.departureDateTime}</Heading>
            <Heading size={6}>Destination: {this.state.result.data.destination}</Heading>
            <Heading size={6}>Arrival Date/Time: {this.state.result.data.arrivalDateTime}</Heading>
          </Media.Item>
        </Media>
        <Content>
          Transaction Hash: {this.state.txHash}
        </Content>
        <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Post" onClick={this.handleClick}>
          Post
        </Card.Footer.Item>
        </Card.Footer>
      </Card.Content>
    </Card>
    </tr>
    </td>
  </div>
)};
      }

export default PostDetails