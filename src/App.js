import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './com.js';
class App extends Component {
	constructor(){
		super();

			this.state={
				// data:"welcom"
				key1:['value1','value2','ji']
				// key2:'value2',
				// key3:'value3'
			};
		

	}
	fnclick=()=>
	{
		this.setState({
				data:"hello"
		})
	}

  render() {
    return (
      <div>

		<h3>happy</h3>
	    <Footer name={this.state.data} click={this.fnclick}/>
	    <ul>
            {for(let i=0;i<{this.state.key1};i++)}
	    </ul>
	  </div>
    );
  }
}

export default App;
