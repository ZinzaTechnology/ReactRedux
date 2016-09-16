import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from "./github/Profile.jsx";
import ReposList from './github/ReposList.jsx';
import Search from './github/Search.jsx';

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			username:'ZinzaTechnology',
			userData:[],
			userRepos:[],
			perPage:5
		}
	}

	//Get user data from github
	getUserData(){
		$.ajax({
			url:'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+
			'&client_secret='+this.props.clientSecrect,
			dataType:'json',
			cache: false,
			success: function(data){
				this.setState({userData:data})
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({username:null});
				alert(err);				
			}.bind(this)
		});
	}

	//Get user repos from github
	getUserRepos(){
		$.ajax({
			url:'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+
			'?client_id='+this.props.clientId+
			'&client_secret='+this.props.clientSecrect + '&sort=created',
			dataType:'json',
			cache: false,
			success: function(data){
				this.setState({userRepos:data})
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({username:null});
				alert(err);				
			}.bind(this)
		});
	}

	handleFormSubmit(username){
		this.setState({username:username},function(){
			this.getUserData();
			this.getUserRepos();
		});
	}


	componentDidMount(){
		this.getUserData();
		this.getUserRepos();
	}

	render(){
		return(
				<div>
					<Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
					<Profile {...this.state}/>
				</div>

			)
	}

}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecrect:React.PropTypes.string
};

App.defaultProps = {
	clientId :'YourKey',
	clientSecrect:'YourSecrect'
}

export default App