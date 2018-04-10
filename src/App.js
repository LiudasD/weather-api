import React, { Component } from 'react';
import Weather from './Components/Weather';
import './Styles/Main.css';
import InfoForm from './Components/InfoForm';
import Title from './Components/Title';
const API_KEY = "8eb94c1f8dd7c2268ccb05036175d608";

class App extends Component {
  state = {
    data: undefined,
    dataForecast: undefined,
    error: undefined,
    done: false,
  }
  getCurrentWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + API_KEY;
    const api_call = await fetch(api);
    const data = await api_call.json();
    const apiForecast = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&appid=' + API_KEY;
    const api_callForecast = await fetch(apiForecast);
    const dataForecast = await api_callForecast.json();
    if (city && country) {
      console.log(city + " " + country);
      this.setState({
        error: undefined,
        todayData: data,
        forecastData: dataForecast,
        done: true,
      })
    }
    else {
      this.setState({
        error: "Please enter city and country values",
      })
    }
    console.log(dataForecast);
  }
  render() {
    return (
      <div >
        <Title />
        <InfoForm getWeather={this.getCurrentWeather} />
        { this.state.done &&
          <Weather
            todayData={this.state.todayData}
            forecastData={this.state.forecastData}
            error={this.state.error}
          />
        }
      </div>
    );
  }
}

export default App;
