import { takeLatest } from "redux-saga/effects";
import { handleGetWeather } from "./handlers/weather";
import { GET_WEATHER } from "../ducks/weather";

export function* watcherSaga() {
    yield takeLatest(GET_WEATHER, handleGetWeather)
};