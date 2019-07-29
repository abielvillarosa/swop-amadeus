import React, { Component } from 'react';
import APIService from '../api'
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import BlockchainClient from '../blockchain';

const api = new APIService();
const blockchain = new BlockchainClient();

class GridBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {result : ''};
    
        // this.handleGridLoad = this.handleGridLoad.bind(this);
        this.handleClick = this.handleClick.bind(this);
      };
    
    // handleGridLoad(e){
    //     e.preventDefault()
    //     api.search().then( res => {
    //      return res.json()
    //     }).then( res => {    
    //       this.setState({result : res});
    //       localStorage.setItem('result', JSON.stringify(res));
    //       console.log(res);
    //     })
    // };

    handleClick(e){
        e.preventDefault()
        // let swopRefNo = this.state.result.data.swopRefNo
        let swopRefNo = 'BKN#f16238a1';
    
        blockchain.buyTicket(swopRefNo, 15000000).then( res => {
          console.log(res);
          this.setState({txHash : res});
        })
      };

    componentWillMount(){
        // Get Booking Details from Local Storage
        api.search('').then( res => {
            return res.json()
           }).then( res => {    
             this.setState({result : res});
             localStorage.setItem('result', JSON.stringify(res));
             console.log(res);
           })
        // let result = JSON.parse(localStorage.getItem('result'));
        // this.setState({result: result})
    
      }

    render () {
    return (
        <section class="has-text-left" style={{ top: 420, left: 80}}>
        <br></br>
        <div>
            <div class="columns is-mobile is-marginless">
                <p class="subtitle">Swop before these expire...</p>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                <div class="tile is-parent">
                    <article class="tile is-child notification is-text">
                    <figure class="image">
                        <img src={ img2 } style={{width: 300 , height: 150 }}></img>
                    </figure>
                    <p class="subtitle">Ottawa</p>
                    <p class="subtitle">09 September 2019 07:00AM</p>
                    <p class="subtitle">$150</p>
                    <span><a class="button is-black" style={{width: 150}} onClick={this.handleClick}>Swop</a></span>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-text">
                    <figure class="image">
                        <img src={ img3 } style={{width: 300 , height: 150 }}></img>
                    </figure>
                    <p class="subtitle">Calgary</p>
                    <p class="subtitle">21 September 2019 09:00AM</p>
                    <p class="subtitle">$250</p>
                    <span><a class="button is-black" style={{width: 150}} onClick={this.handleClick}>Swop</a></span>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-text">
                    <figure class="image">
                        <img src={ img4 } style={{width: 300 , height: 150 }}></img>
                    </figure>
                    <p class="subtitle">Montreal</p>
                    <p class="subtitle">23 September 2019 08:00PM</p>
                    <p class="subtitle">$210</p>
                    <span><a class="button is-black" style={{width: 150}} onClick={this.handleClick}>Swop</a></span>
                    </article>
                </div>
                </div>
            </div>
        </div>
        
        </section>
    );}
};

export default GridBuilder;