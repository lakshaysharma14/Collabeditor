import React, { Component } from 'react';
import AceEditor from 'react-ace';
import fire from './fire';
import brace from 'brace';
import 'brace/mode/java';
import 'brace/theme/github';
//import Header from './Header.js'

var database =fire.database();



class Doc extends Component 
{
  
  constructor(props)
  {
    super(props);
    this.state = {
      code:""
    }
  }

//----------------------------------------------------------------------------------------------------------------
  componentDidMount()
  {
    database.ref("/doc").on("value",(snapshot)=>{

      let val =snapshot.val();
      this.setState({
        code:val
      })
    })
  }

 //-----------------------------------------------------------------------------------------------------------------
  handleChange(data) 
  {
  database.ref("/doc").set(data);
  }

//-------------------------------------------------------------------------------------------------------------------

   render() 
  {
   
    return(
    <div>
    <h1>Editor</h1>
    <AceEditor
      mode="java"
      theme="github"
      
      onChange={(data)=>{this.handleChange(data)}}
      value={this.state.code}
   
      name="UNIQUE_ID_OF_DIV"
      editorProps={{$blockScrolling: true}}
    >
    </AceEditor>
    </div>
 );  

  }
}
//-----------------------------------------------------------------------------------------------------------------------
export default Doc;
