import React, { Component } from 'react';
import Inputs from "./components/inputs";
import Weather from "./components/weather";
import './App.css';

class App extends React.Component {
  state = {

    weatherData: {
      mean: '',
      median: [],
      mode: []
    },

    city: '',
    country: ''

  }

  componentDidMount() {
    this.getData();
  }

  changeCity = (event) => {

    this.setState({city: event.target.value});
  }

  changeCountry = (event) => {

    this.setState({country: event.target.value});
  }

  getData = async (event) => {
    if(event) {
      event.preventDefault();
    }
    
    let url = `https://beznet-weather-forecast-app.herokuapp.com/${this.state.city}/${this.state.country}`;

    fetch(url)


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

      <h3>Weather Forecast</h3>

        <Inputs getData={this.getData} changeCity={this.changeCity} changeCountry={this.changeCountry} />

        <Weather 
          mean={this.state.weatherData.mean}
          median={this.state.weatherData.median}
          mode={this.state.weatherData.mode.map(number => {
            return <li> {number} </li>;
          })}
        />

      </div>

    );
  }
};

export default App;
