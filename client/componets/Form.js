import React , { Component } from 'react';
import { Link, hashHistory, Route, Redirect } from 'react-router';
import DisplaySchema from './DisplaySchema'

class Form extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      schema: '' ,
      showComponent: false       
    };
  }
  
  onClick(event) {
    event.preventDefault();

    this.setState({
      schema: event.target.value,
      showComponent: true
    })
    if (this.state.schema.lenght > 0) {
      axios.post('/schema', {
        schema: this.state.schema
      })
      .then(function (response) {
        console.log('worked');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  

  render() {
    return (
      <div>
        <h1>Focus.io</h1>
        <form >
          <label>Insert Schema</label>
          <textarea onChange={event => this.setState({ schema: event.target.value})} value={this.state.schema}>
          </textarea>  
        </form>   
        <button onClick={this.onClick.bind(this)}>Display Schema</button>
        {this.state.showComponent ?
          <Redirect push to="/schema" /> :
           null
        }
      </div>  
    )
  } 
}

export default Form;
