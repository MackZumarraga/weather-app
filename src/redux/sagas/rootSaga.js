import { takeLatest } from "redux-saga/effects";
import { handleGetWeather } from "./handlers/weather";
import { GET_WEATHER } from "../ducks/user";

export function* watcherSaga() {
    yield takeLatest(GET_WEATHER, handleGetWeather)
};