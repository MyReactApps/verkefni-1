import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      list: [],
    }
  }
  onInputChange(event){
    event.preventDefault();
    this.setState({input: event.target.value})
  }
  submit(event){
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.input ],
      input: ''
    })
  }
  removeItem(index){
    console.log(index);
    this.setState({
      list: [
        ...this.state.list.slice(0 , index),
        ...this.state.list.slice(index + 1)
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form onSubmit={(event) => this.submit(event)}>
          <input value={this.state.input} 
          onChange={event => this.onInputChange(event)}
          type="text" 
          />
        </form>
        <ul>
        {
          this.state.list.map((item, index) =>
          ( <Item 
              key={index} 
              name={item} 
              index={index}
              deleteHandler={this.removeItem.bind(this) }
          /> )
          )
        }
        </ul>
      </div>
    );
  }
}

export default App;

class Item extends Component{
  remove(event){
    this.props.deleteHandler(this.props.index)
  }
  render(){
    return (
      <li>{ this.props.name } 
        <a href='#'
        id={ this.props.index }
        onClick={ event => this.remove(event) }
        >
        -
        </a> 
      </li>
    )
  }
}