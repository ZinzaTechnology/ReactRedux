import React,{Component} from 'react';

class SearchBar extends Component {

  render(){
    return <input onChange={event=> {
      console.log(event.target.value);
      console.log(event.target);
    }} />;  //react createelement
  }

  onInputChange(event){
    console.log(event);
  }

}


export default SearchBar
