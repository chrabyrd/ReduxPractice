import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  render(){
    return(
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>  
    )
  }
}
