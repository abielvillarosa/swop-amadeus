import React, { Component } from 'react';
import APIService from '../api'
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';

const api = new APIService()

class GridBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {result : ''};
    
        this.handleGridLoad = this.handleGridLoad.bind(this);
      };
    
    handleGridLoad(e){
        e.preventDefault()
        api.search().then( res => {
         return res.json()
        }).then( res => {    
          this.setState({result : res});
          console.log(res);
        })
    };

    componentWillMount(){
        // Get Booking Details from Local Storage
        let result = JSON.parse(localStorage.getItem('result'));
        this.setState({result: result})
    
      }

    render () {
    return (
        <section class="has-text-left" style={{ top: 420, left: 80}}>
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
                    <p class="subtitle">Date: {this.state.result.data.departureDateTime}</p>
                    <p class="subtitle">{this.state.result.data.amount}</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-text">
                    <figure class="image">
                        <img src={ img3 } style={{width: 300 , height: 150 }}></img>
                    </figure>
                    <p class="subtitle"> {this.state.result.data.departureDateTime}</p>
                    <p class="subtitle">{this.state.result.data.amount}</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-text">
                    <figure class="image">
                        <img src={ img4 } style={{width: 300 , height: 150 }}></img>
                    </figure>
                    <p class="subtitle"> {this.state.result.data.departureDateTime}</p>
                    <p class="subtitle">{this.state.result.data.amount}</p>
                    </article>
                </div>
                </div>
            </div>
        </div>
        
        </section>
    );}
};

export default GridBuilder;