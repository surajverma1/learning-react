import React from 'react';
import { concat, isEqual } from 'lodash';


import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';

class Home extends React.Component {
	constructor() {
		super();
		this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
		this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
		this.state = {
			isSignUp: true,
			isUserLogIn: false,
			users: []
		}

	}

	handleSubmitSignUp(user) {
		debugger
		const newUserData = concat(this.state.users, user);
		this.setState({users: newUserData, isSignUp: false}) ;
	}

	handleSubmitSignIn(creadential) {
		debugger
		_.map(this.state.users, user => {
			console.log(user.email)
			if(isEqual(user.email, creadential.email) && isEqual(user.password, creadential.password)) {
				alert("User LogedIn successfully");
				this.setState({isUserLogIn: true});
			}
		})
	}

	render() {
		const { isSignUp, users } = this.state;

		return(
			<div>
				<Header />
				{
					isSignUp &&
					<SignUp
						users={users}
						handleSubmit={this.handleSubmitSignUp}
					/>
				}
				{
					!isSignUp &&
					<SignIn
						users={users}
						handleSubmit={this.handleSubmitSignIn}
					/>
				}
			</div>
		)
	}
}

export default Home;