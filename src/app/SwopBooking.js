import React from 'react'
import { Card } from "react-bulma-components/full";
import { Media, Image } from "react-bulma-components/full";
import { Heading } from "react-bulma-components/full";
import aircanlogo from './images/aircanada-logo.png';
import westjetlogo from './images/westjet-logo.png';

const SwopBooking = () => (
<div>
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
</div>
)
export default SwopBooking