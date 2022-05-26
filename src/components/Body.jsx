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
  
  useEffect(() => {
    console.log(`from useeffect ${cities}`)
    for (const city of cities) {
      console.log(`about to be processed ${city}`)
      dispatch(getWeather(city))
    }
  }, [cities, dispatch]);

  const reduxState = useSelector((state) => state)
  console.log(reduxState)

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
    let newCities = () => cities.push(value) 
    setCities(newCities)
    console.log(`after ${cities}`)
  }

  return (
    <div>
      <h1>{reduxState.weather.weatherData ? reduxState.weather.weatherData.location ? reduxState.weather.weatherData.location.name : "aa" : "bb" }</h1>
      {/* <h1>{reduxState ? "something" : "undefined"}</h1> */}
      <h4>Enter a city name!</h4>
      <form onSubmit={handleCheck}>
        <input type="text" onChange={handleCityChange}/>
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