import React from 'react';
import Header from './Header';

import { concat } from 'lodash';
import { Redirect } from 'react-router' 

class SignIn extends React.Component {
	constructor() {
		super();

		let userInfo = {};
		userInfo.email="";
		userInfo.password='';
		this.state = userInfo;
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({[name]: value});
	}

	handleSubmit(e) {
		e.preventDefault();
		const newUser = {
			password: this.state.password,
			email: this.state.email
		}
		this.props.handleSubmit(newUser);
		this.setState({email: '', password: ''});
	}

	render(){

		const {
			email,
			password
		} = this.state;

		return(
			<div className="container">
				<div className="row">
					<div className="col-md-3">
					</div>

					<div className="col-md-6">
						<div>
							<h2>Please Fill the Form</h2>
							<hr/>
							<form>
							  <div className="form-group">
							    <label for="email">Email:</label>
							    <input
							    	type="email"
							    	className="form-control"
							    	id="email"
							    	name="email"
							    	value={email}
							    	onChange={this.handleChange}
							    />
							  </div>
							  <div className="form-group">
							    <label for="password">Password:</label>
							    <input
							    	type="password"
							    	className="form-control"
							    	id="password"
							    	name="password"
							    	value={password}
							    	onChange={this.handleChange}
							    />
							  </div>
							  <button
							  	className="btn btn-default"
							  	onClick={this.handleSubmit}
							  >
							  	Submit
							  </button>
							</form>
						</div>
					</div>

					<div className="col-md-3">
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn;
