export const GET_WEATHER = "GET_WEATHER";
export const SET_WEATHER = "SET_WEATHER";

export const getWeather = (city) => ({
    type: GET_WEATHER,
    city
});

export const setWeather = (weatherData) => ({
    type: SET_WEATHER,
    weatherData,
});


const initialState = {
    weatherData: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            let { weatherData } = action;
            weatherData = [...state.weatherData, weatherData]
            return { weatherData };
        default:
            return state;
    }
};