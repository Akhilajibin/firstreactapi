import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Incr extends Component {
 constructor(props)
 {
 	super(props);
 	this.state={
 			count:0
 	}
 
 }
clickfunction =()=>
{
  console.log("hhh");
	this.setState(
{
	count:this.state.count+1
});
}
  render() {
    return (
      <div>
      <div>

			<h3>count:{this.state.count}</h3>

			<button onClick={this.clickfunction}>click to increment</button>  
       
      </div>
      <div >
      </div>
   </div>
    );
  }
}

export default Incr;
