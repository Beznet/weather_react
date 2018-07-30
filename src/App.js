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
      <h1>Lafayette, LA Weather Forecast</h1>
      <h3>Mean</h3>
        <div>{this.state.weatherData.mean}</div>
        <ul>
      <h3>Median(s)</h3>
          {this.state.weatherData.median.map(number => {
            return <li>{number}</li>
          })}
        </ul>
        <ul>
        <h3>Mode(s)</h3>
          {this.state.weatherData.mode.map(number => {
            return <li>{number}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
