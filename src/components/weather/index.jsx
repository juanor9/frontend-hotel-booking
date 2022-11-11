import React from "react";
import "./style.css";
import sun from "../weather/sol.png";

function Weather() {
  function days(date, days) {
    let daysArr = [];
    for (let i = 0; i < days; i++) {
      let d = date.setDate(date.getDate() + i);
      d = new Date(d);
      daysArr.push(d.toLocaleDateString('en-us', {weekday: 'long', month: 'short', day: 'numeric' }));
    }
    return daysArr;
  }
  const daysWeather = days(new Date(), 4);

  return (
    <section id="weather" className="weather">
      <h3 className="weather__header">Weather</h3>
      <div className="weather__list-container">
        <ul className="weather__list">
          {daysWeather.map((element, i) => (
            <li key={i} className="weather__list-element">
              <span className="weather__list-date">{element}</span>{" "}
              <figure className="weather__icon">
                <img src={sun} alt="" />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Weather;
