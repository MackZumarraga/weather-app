import { takeEvery } from "redux-saga/effects";
import { handleGetWeather } from "./handlers/weather";
import { GET_WEATHER } from "../ducks/weather";

export function* watcherSaga() {
    yield takeEvery(GET_WEATHER, handleGetWeather)
};