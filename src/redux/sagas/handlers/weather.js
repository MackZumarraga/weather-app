import { call, put } from "redux-saga/effects";
import { setWeather } from "../../ducks/weather";
import { requestGetWeather } from "../requests/weather";


export function* handleGetWeather(action) {
    try {
        const response = yield call(requestGetWeather, city);
        const { data } = response;
        yield put(setWeather(data))
    } catch (error) {
        console.log(error);
    }
}