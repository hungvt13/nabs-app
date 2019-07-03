import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      myData: []
    };
  }

  componentDidMount(){
    fetch('http://localhost:4000/series')
    .then( res => res.json())
    .then(data => {
      this.setState({myData: data})
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>Series List</h1>
        <ul>
        {this.state.myData.map(item => {
          return <li key={item.mid}><div><Link to = {{pathname: item.mid}}>{item.mid}>{item.name}</Link></div><br></br><div><img src={item.cover} alt={item.mid}></img></div></li>
        })}
        </ul>
        </header>
      </div>
    );
  }
}
