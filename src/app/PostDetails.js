import React, { Component } from 'react'
// import { Field, Label, Control, Input, Card } from "react-bulma-components/full";
// import { Heading, Columns, Section, Container } from "react-bulma-components/full";
import { Media, Image, Card, Heading } from "react-bulma-components/full";
import aircanlogo from './images/aircanada-logo.png';
import BlockchainClient from '../blockchain'

const blockchain = new BlockchainClient()

class PostDetails extends Component {
  constructor(props){
    super(props);
    this.state = {value: '', redirect: false, result : ''};
    // console.log(this.props.location.result);
  }
  componentWillMount(){
    console.log('bago mag mount')
    let result = '';
    result = JSON.parse(localStorage.getItem('result'));
    console.log('dtoo ' + result);


    if (localStorage && localStorage.getItem('result')) {
       result = JSON.parse(localStorage.getItem('result'));
       console.log('dtoo ' + result);
      }
     this.setState({result: result})
     if (localStorage && localStorage.getItem('refno')) {
      result = JSON.parse(localStorage.getItem('refno'));
      console.log(result);
     }
    this.setState({value: result})
  }

  handleClick(e){
    e.preventDefault()
  
    console.log('click dtooo')
    blockchain.postTicket(this.state.result.data.swopRefNo, 15000000).then( res => {
      console.log(res)
    })
  };

  render() {
    // console.log(this.props.location.result);
    return (
<div>
  <p>This is the PostDetails page</p>
  <td>
  <Card color="danger">
      {/* <Card.Image size="1by1" src="http://bulma.io/images/placeholders/1280x960.png" /> */}

      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={8} alt="4x4" src={aircanlogo} />
          </Media.Item>
          <Media.Item>
            <Heading size={6}>{this.state.result.data.swopRefNo}</Heading>
            <Heading size={6}>Origin: {this.state.result.data.origin}</Heading>
            <Heading size={6}>Departure Date/Time: {this.state.result.data.departureDateTime}</Heading>
            <Heading size={6}>Destination: {this.state.result.data.destination}</Heading>
            <Heading size={6}>ArrivalDateTime: {this.state.result.data.arrivalDateTime}</Heading>
          </Media.Item>
        </Media>
        {/* <Content>
        </Content> */}
        <Card.Footer>
        <Card.Footer.Item renderAs="a" href="#Post" onClick={this.handleClick}>
          Post
        </Card.Footer.Item>
        </Card.Footer>
      </Card.Content>
    </Card>
    </td>
</div>
)};
      }

export default PostDetails