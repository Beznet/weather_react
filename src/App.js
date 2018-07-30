import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    weatherData: {
      mean: '',
      median: [],
      mode: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('https://beznet-weather-forecast-app.herokuapp.com')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({weatherData: data});
      console.log(data);
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.weatherData.mean}</div>
        <ul>
          {this.state.weatherData.median.map(number => {
            return <li>{number}</li>
          })}
        </ul>
        <ul>
          {this.state.weatherData.mode.map(number => {
            return <li>{number}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
