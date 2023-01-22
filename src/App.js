import React, { useState, useEffect } from "react";
import {Outlet, Link} from "react-router-dom"
import "./App.css"
function App() {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("london");
  const [photos, setPhotos] = useState([]);
  function CurrentWeather() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=1df1812f61ad3ef59b79c1b905b8fc81&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeather(object);
        console.log(weather);
      })
      .catch((error) => console.log(error));
    fetch(
      `https://api.unsplash.com/search/photos?query=${locations}&client_id=fiKbDQof9U_UPlf2XWgc4BPymj4HeL5DrcJ9Hat1rjQ`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("You made a mistake");
        }
      })
      .then((data) => {
        console.log(data);
        setPhotos(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }
  console.log(weather)
  function HoursWeather(){
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${locations}&limit=5&appid=1df1812f61ad3ef59b79c1b905b8fc81`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeather(object);
        console.log(weather);
      })
      .catch((error) => console.log(error));
    fetch(
      `https://api.unsplash.com/search/photos?query=${locations}&client_id=fiKbDQof9U_UPlf2XWgc4BPymj4HeL5DrcJ9Hat1rjQ`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("You made a mistake");
        }
      })
      .then((data) => {
        console.log(data);
        setPhotos(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="app">
    <div className="wrapper">
    <div className="search">
      <input
        type="text"
        value={locations}
        onChange={(e) => setLocations(e.target.value)}
        placeholder="Enter location"
        className="location_input"
      />
      <button className="location_searcher" onClick={CurrentWeather}>
        Search Location
      </button>
      <button className="location_searcher " onClick={HoursWeather}>
        <Link to={`Hours`} className="Link">Search for hours</Link>
      </button>
      <button className="location_searcher">
      <Link to={`Days`} className="Link">Search for Days</Link>
      </button>
    </div>
    <div className="app__data">
      <p className="temp">Current Temparature: {weather?.main?.temp}</p>
      <p className="temp">Country: {weather?.sys?.country}</p>
      <p className="temp">Coord lat: {weather?.coord?.lat}</p>
      <p className="temp">Coord lon: {weather?.coord?.lon}</p>
    </div>
    <img className="app__image" src={photos} alt="" />
  </div>
  </div>
  );
}

export default App;
