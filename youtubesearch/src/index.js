import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY='AIzaSyBnUPOePPUJ4etOs8HtqOe5Y47M-vAffZk';

const App = ()=>{
  return <SearchBar/>;
}

ReactDOM.render(
  <App/>,document.querySelector('.container')
)
