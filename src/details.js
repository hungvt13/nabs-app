import React, {Component} from 'react';
import './App.css';

export default class Details extends Component{
  constructor(props){
    super(props);
    this.state = {
      mid: '',
      description: '',
      categories: '',
      alias: '',
      cover: '',
      thumbnail: ''
    };
  }

  componentDidMount(){
    const handle = this.props.match.params.mid;
    const url = `http://localhost:4000/series/${handle}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        mid: data[0].MID,
        description: data[0].description,
        categories: data[0].categories,
        alias: data[0].alias,
        cover: data[0].cover,
        thumbnail: data[0].thumbnail
      })
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>Details</h1>
        <div>
          <img src = {this.state.thumbnail} alt={this.state.mid}/>
          <p> <b>MID:</b> {this.state.mid}</p>
          <p> <b>Description:</b> {this.state.description}</p>
          <p> <b>Categories:</b>{this.state.categories}</p>
          <p> <b>Alias:</b> {this.state.alias}</p>
        </div>

        </header>
      </div>
    );
  }
}
