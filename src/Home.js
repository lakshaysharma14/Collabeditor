import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component 
{

  render() 
  {
  	  return(
       
       <div>
      
       <h1>Welcome to Collaborate Editor</h1>
      
       <Link to="/doc">Go to Editor</Link>
      
      </div>
    );
  }

}

export default Home;
