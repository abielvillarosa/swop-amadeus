import React from 'react'
import { Card } from "react-bulma-components/full";
import { Media, Image } from "react-bulma-components/full";
import { Heading, Content, Footer } from "react-bulma-components/full";
import { Tile, Box, Columns } from "react-bulma-components/full";
import aircanlogo from './images/aircanada-logo.png';
import westjetlogo from './images/westjet-logo.png';

const SwopBooking = () => (
<div>
  <p>This is the SwopBooking page</p>
  <tr>
  <td>
  <Card color="danger">
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
        </Content> */}
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
    {/* <tr> 
    <Box>
      <Tile kind="ancestor">
        <Tile size={8} vertical>
          <Tile>
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="info">
                <Heading>Middle Tile...</Heading>
                <Heading subtitle>With image Tile...</Heading>
                <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="info">
                <Heading>Middle Tile...</Heading>
                <Heading subtitle>With image Tile...
                </Heading>
                <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile renderAs="article" kind="child" notification color="info">
                <Heading>Middle Tile...</Heading>
                <Heading subtitle>With image Tile...</Heading>
                <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
              </Tile>
            </Tile>
          </Tile>
        </Tile>
      </Tile>
    </Box>
    </tr>
     <tr>
     <Box
     responsive={{
       mobile: {
         display: 'block',
       },
       tablet: {
         display: 'flex',
       },
       desktop: {
         display: 'inline-flex',
         only: true,
       },
       widescreen: {
         display: 'inline-block',
       },
     }}
     hide={{
       tablet: {
         hide: true,
         only: true,
       },
       widescreen: {
         hide: true,
       },
     }}
   >
     <Media>
       <Media.Item renderAs="figure" position="left">
         <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
       </Media.Item>
       <Media.Item>
         <Content>
           <p>
             <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
             <br />
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
             vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
           </p>
         </Content>
       </Media.Item>
     </Media>
   </Box>
     </tr> */}
</div>
)
export default SwopBooking