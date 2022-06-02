import { call, put } from "redux-saga/effects";
import { setWeather } from "../../ducks/weather";
import { requestGetWeather } from "../requests/weather";


export function* handleGetWeather(action) {
    try {
        const response = yield call(requestGetWeather, action.city);
        const { data } = response;
        console.log(`response ${data.location.name}`)
        console.log('statelocations in handler', action.stateLocations)
        if (!action.stateLocations.includes(data.location.name)) {
            yield put(setWeather(data))
        }
    } catch (error) {
        console.log(error);
    }
}