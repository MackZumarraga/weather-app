import axios from "axios";

export function requestGetWeather(city) {
    return axios.request({
        method: 'get',
        url: `http://api.weatherapi.com/v1/current.json?key=0c0f564ce9824035a2630556221805&q=${city}&aqi=no`
    });   
}