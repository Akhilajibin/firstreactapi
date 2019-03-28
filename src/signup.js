import React from 'react';
//import './App.css';
class App extends React.Component{
	constructor(props){
	super(props);
	this.state={
	username:'',
	email:'',
	password:'',
	usertype:'',
	}
	}
	signUp=(e)=>{
	var username=this.refs.username.value;
	var password=this.refs.password.value;
	var email=this.refs.email.value;
	var usertype=this.refs.usertype.value;
	var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


	if(username===''||password===''||email===''||usertype==='')
		alert('Fill data ');
	else if(username.length<8)
		alert('username contain atleast 8 character');
	else if(!password.match(paswd))
		{
 			alert("password must contain atleast one Capital letter,small letter,number ,special character and must be 8 character long");
		}
	else if(!email.match(mailformat)){
 			alert("please enter a valid email");
				}

	else{

		fetch("http://cvhunt.com/API/signupinfo",{method:'POST',
		body:JSON.stringify({username:username,email:email,password:password,usertype:usertype})
		})
		.then(res=>res.json())
		.then(response=>{
		console.log(response);
		alert(response.message);
		})
		.catch(error=>console.log("error".error));
		{/*alert(this.state.username);*/}
	}
		}
	render(){
	return(
		<div style={{align:'center',backgroundColour:'silver'}}>
		<div style={{align:'center',width:'60px'}}>
		<h1>SIGNUP</h1>
		<input type="text" placeholder="username" ref="username" /><br/>
		<input type="password" placeholder="password" ref="password" /><br/>
		<input type="email" placeholder="email" ref="email" /><br/>
		<input type="number" placeholder="usertype" ref="usertype" /><br/>
		<button type="submit" id="signup" onClick={this.signUp}>SIGNUP</button>
	  	</div>
        </div>


	);
	}
}
export default App;
