import React from 'react';
// import logo from './logo.svg';
// import './App.css';

const Footer=(props)=> {
  
    return (
      <div>
		<h1>{props.name}</h1>
		<button  onClick={props.click}>click</button>
      </div>

    );
  
}

export default Footer;
