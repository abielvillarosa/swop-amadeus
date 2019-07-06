import React from 'react'
import { Card } from "react-bulma-components/full";
import { Media } from "react-bulma-components/full";
import { Image } from "react-bulma-components/full";
import { Heading } from "react-bulma-components/full";
import { Content } from "react-bulma-components/full";
import aircanlogo from './images/aircanada-logo.png';
import westjetlogo from './images/westjet-logo.png';

const SwopBooking = () => (
<div>
  <p>This is the SwopBooking page</p>
  <tr>
  <td>
  <Card>
      {/* <Card.Image size="1by1" src="http://bulma.io/images/placeholders/1280x960.png" /> */}
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={8} alt="4x4" src={aircanlogo} />
          </Media.Item>
          <Media.Item>
            <Heading size={6}>Airline</Heading>
            <Heading size={6}>Origin</Heading>
            <Heading size={6}>DepartureDateTime</Heading>
            <Heading size={6}>Destination</Heading>
            <Heading size={6}>ArrivalDateTime</Heading>
          </Media.Item>
        </Media>
        {/* <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content> */}
      </Card.Content>
    </Card>
    </td>
    <td>
    <Card>
      {/* <Card.Image size="1by1" src="http://bulma.io/images/placeholders/1280x960.png" /> */}
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={8} alt="4x4" src={westjetlogo} />
          </Media.Item>
          <Media.Item>
            <Heading size={6}>Airline</Heading>
            <Heading size={6}>Origin</Heading>
            <Heading size={6}>DepartureDateTime</Heading>
            <Heading size={6}>Destination</Heading>
            <Heading size={6}>ArrivalDateTime</Heading>
          </Media.Item>
        </Media>
        {/* <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content> */}
      </Card.Content>
    </Card>
    </td>
    <td>
    <Card>
      {/* <Card.Image size="1by1" src="http://bulma.io/images/placeholders/1280x960.png" /> */}
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image renderAs="p" size={8} alt="4x4" src={westjetlogo} />
          </Media.Item>
          <Media.Item>
            <Heading size={6}>Airline</Heading>
            <Heading size={6}>Origin</Heading>
            <Heading size={6}>DepartureDateTime</Heading>
            <Heading size={6}>Destination</Heading>
            <Heading size={6}>ArrivalDateTime</Heading>
          </Media.Item>
        </Media>
        {/* <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content> */}
      </Card.Content>
    </Card>
    </td>
    </tr>
</div>
)
export default SwopBooking