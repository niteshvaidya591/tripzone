import React from "react";
import weatherIcon from "./icon-party-sunny.svg";
import "./Weather.css";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherResult: [],
      color: ["#0D7E88", "#D09378", "#405B5D", "#74A748"],
    };
  }
  componentDidMount() {
    fetch("https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576")
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            weatherResult: res.result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
  render() {
    return (
      <section className="weather-container app-container" id="weather">
        <h2 className="weather-heading">THE WEATHER CHANNEL</h2>

        <div className="weather-body">
          {this.state.weatherResult.map((i, j) => (
            <div
              key={j}
              className="weather-status"
              style={{ backgroundColor: this.state.color[j] }}
            >
              <p className="weather-status__cities">{i.city}</p>
              <img src={weatherIcon} alt={`Weather of the city ${i.city}`} />
              <p className="weather-status__temparature">
                {i.temp_Fahr}
                <span>&#176;</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
