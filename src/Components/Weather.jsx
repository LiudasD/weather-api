import React, { Component } from 'react';
import '../Styles/Weather.css';
export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iterator: 0,
        }
    }
    changeToCelsius = (temperature) => {
        return (temperature - 273.15).toPrecision(2);
    }
    changeToMeters = (miles) => {
        return (miles * 0.44704).toPrecision(2);
    }
    toLithuanian = (word) => {
        switch (word) {
            case "Clouds":
                return (
                    "Debesuota"
                )
            case "Clear":
                return (
                    "Giedra"
                )
            case "Rain":
                return (
                    "Lietus"
                )
            case "Snow":
                return (
                    "Sniegas"
                )
            default:
                return (
                    ""
                )
        }
    }
    iterate = () => {
        if (this.state.iterator < 32)
            this.setState({
                iterator: this.state.iterator + 8,
            })
        console.log(this.state.iterator);
    }
    decrease = () => {
        if (this.state.iterator > 7)
            this.setState({
                iterator: this.state.iterator - 8,
            })
        console.log(this.state.iterator);
    }
    render() {
        return (
            <div>
                <div class="ui buttons">
                    <button class="ui button" onClick={() => this.decrease()}>Ankstesnis puslapis</button>
                    <div class="or"></div>
                    <button class="ui black button" onClick={() => this.iterate()}>Kitas puslapis</button>
                </div>
                <table class="ui selectable inverted table">
                    <thead>
                        <tr class="center aligned">
                            <th>Data</th>
                            <th>Temperatūra</th>
                            <th>Oro sąlygos</th>
                            <th>Drėgmė</th>
                            <th>Vėjas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.forecastData.list.slice(this.state.iterator, this.state.iterator + 8).map(index => {
                                return (
                                    <tr key={index} class="center aligned">
                                        <th>{index.dt_txt}</th>
                                        <th>{this.changeToCelsius(index.main.temp)}</th>
                                        <th>{this.toLithuanian(index.weather[0].main)}</th>
                                        <th>{index.main.humidity}%</th>
                                        <th>{this.changeToMeters(index.wind.speed)}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
