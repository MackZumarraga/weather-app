import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from '../redux/ducks/weather';
// import axios from 'axios';

function Example() {
  const dispatch = useDispatch();

  // const [response, setResponse] = useState({
  //   location: "",
  //   temperature: "",
  //   condition: ""
  // })
  const [cities, setCities] = useState(["New York", "Los Angeles"])
  const [value, setValue] = useState("")

  const reduxState = useSelector((state) => state)
  let stateLocations = reduxState.weather.weatherData.map((obj) => obj.location.name)

  useEffect(() => {
    console.log(`from useeffect ${cities}`)
    const stateWeatherData = reduxState.weather.weatherData;
    const citiesState = [];
 
 
    for (let data of stateWeatherData){
      citiesState.push(data.location.name);
    }
    for (const city of cities) {

      if (!citiesState.includes(city)){
        console.log(`about to be processed ${city}`)
        dispatch(getWeather(city, stateLocations))
      }
    }
  }, [cities, dispatch]);

  // console.log('state', reduxState.weather.weatherData)
  console.log('stateLocations', stateLocations)
  // console.log(`reduxState ${Object.keys(reduxState.weather.weatherData)}`)

  // useEffect(() => {
  //   async function fetchData() {
  //     const resp = await axios.get(`http://api.weatherapi.com/v1/current.json?key=0c0f564ce9824035a2630556221805&q=${city}&aqi=no`)
  //     let newResp = {
  //       location: resp.data.location.name,
  //       temperature: resp.data.current.temp_f,
  //       condition: resp.data.current.condition.text
  //     }
  //     setResponse(newResp)
  //   }
  //   fetchData();

  // }, [city]);



  const handleCityChange = (event) => {
    event.persist();
    setValue(event.target.value)
  }

  const handleCheck = (e) => {
    e.preventDefault();
    console.log(`before ${cities}`)
    if (!cities.includes(value)) {
      setCities(cities.concat(value))
      console.log(`after in if ${cities}`)  
    }
    console.log(`after non if ${cities}`)
  }

  return (
    <div>
      {/* <h1>{reduxState.weather.weatherData ? reduxState.weather.weatherData.location ? reduxState.weather.weatherData.location.name : "aa" : "bb" }</h1> */}
      {reduxState.weather.weatherData.length > 0 ? reduxState.weather.weatherData.map(
        (data, index) => (
          <h2 key={index}>{data.location.name}, Temperature: {data.current.condition.text}</h2>)) : ""}
      {/* <h1>{reduxState ? "something" : "undefined"}</h1> */}
      <h4>Enter a city name!</h4>
      <form onSubmit={handleCheck}>
        <input type="text" onChange={handleCityChange} />
        <button type="submit" value="Check the weather">Check Weather</button>
      </form>
    </div>
  )


  // if (city === "") {
  //     return (
  //         <div>
  //             <h1>No Location</h1>
  //             <h1>Enter a city name!</h1>
  //             <form onSubmit={handleCheck}>
  //               <input type="text" onChange={handleCityChange}/>
  //               <button type="submit" value="Check the weather">Check Weather</button>
  //             </form>

  //         </div>
  //     )
  // } else {
  //     return (
  //       <div>
  //         <h1>{response.location}</h1>
  //         <h1>Enter a city name!</h1>
  //         <form onSubmit={handleCheck}>
  //           <input type="text" onChange={handleCityChange}/>
  //           <button type="submit" value="Check the weather">Check Weather</button>
  //         </form>

  //         <h2>
  //             The weather in {response.location} is {response.condition} with a temperature of {response.temperature} Fahrenheit!
  //         </h2>
  //       </div>
  //     );
  // }
}

export default Example;