import react from "react";

export default function Weather(props) {
  if (props.weather === null) {
    return <div className="WeatherApp"></div>;
  } else {
    return (
      <div className="WeatherApp">
        <ul>
          <li>Temperature: {props.weather[0].temperature}C</li>
          <li>{props.weather[0].desc}</li>
          <li>Humidity: {props.weather[0].humidity}%</li>
          <li> Wind Speed: {props.weather[0].wind}km/h</li>
          <li>
            <img src={props.weather[0].icon} />
          </li>
        </ul>
      </div>
    );
  }
}
