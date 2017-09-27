import React from 'react'

export class FormContainer extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {username : "luv", password : ""};
	}
	componentDidMount() {
	}
	componentWillUnmount() {

	}
	render(){
		return(
			<form method="post">
			<label>Username</label>
			<Username defaultValue={this.state.username} /><br/>
			<label>Password</label>
			<Password />
			<Submit />
			</form>
		);
	}
}
class Username extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = { username: this.props.defaultValue } ;
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e)
	{
		this.setState({ username: e.target.value });
	}
	render(){
		return(
			<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
		);
	}
}

function Password()
{
	return(
		<input type="password" name="password" />
	);
}

function Submit(){
	return(
	<input type="submit" value="Submit" />
	);
}
