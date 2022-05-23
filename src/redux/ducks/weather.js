export const GET_WEATHER = "GET_WEATHER";
export const SET_WEATHER = "SET_WEATHER";

export const getWeather = (city) => ({
    type: GET_WEATHER,
    city
});

export const setWeather = (weather) => ({
    type: SET_WEATHER,
    weather,
});


const initialState = {
    weather: undefined
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            const { weather } = action;
            return { ...state, weather };
        default:
            return state;
    }
};