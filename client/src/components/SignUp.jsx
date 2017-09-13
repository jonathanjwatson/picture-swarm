import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { setAxiosHeaders } from '../util';

class SignUp extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       password_confirmation: '',
       redirect: false
   }
 }

 _signUp = async (e) => {
   e.preventDefault();
   const payload = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }
    console.log(payload)
   try {
    const response = await axios.post('/auth', payload);
    setAxiosHeaders(response.headers);
    this.props.history.goBack()
   }
   catch(err) {
     await console.log(err)
     return err.message
   }
 };

 _signIn = (e) => {
   e.preventDefault();
   this.setState({redirect: true})
 }

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <div>
       <form onSubmit={this._signUp}>
         <div>
           <label htmlFor="email">E-mail: </label>
           <input onChange={this._handleChange} type="email" name="email" value={this.state.email} required/>
         </div>
         <div>
           <label htmlFor="password">Password: </label>
           <input onChange={this._handleChange} type="password" name="password" value={this.state.password} required/>
         </div>
         <div>
           <label htmlFor="password">Confirm Password: </label>
           <input onChange={this._handleChange} type="password" name="password_confirmation" value={this.state.password_confirmation} required/>
         </div>
         <div>
         {this.state.password === this.state.password_confirmation ? null : <p>Passwords do not match</p>}
        
         </div>
         <div>
         <button className="button button-primary">Sign Up</button>
         </div>
         <div>
         <Link to="/signin">Already have an account? Sign in now</Link>
         </div>
       </form>
     </div>
   );
 }
}

export default SignUp;