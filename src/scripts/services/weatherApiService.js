import fetch from 'isomorphic-fetch';

export default class WeatherApiService {
    _apiKey = '&APPID=17ccbbaee09f9f297a7512dc954165b4';

    _baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

    // _rndUSerUrl = 'https://randomuser.me/api/';

    _urlOptions = '&lang=ru&units=metric';

    getData = async (cityName) => {
        const response = await fetch(`${this._baseUrl}${cityName}${this._urlOptions}${this._apiKey}`);
        // const response = await fetch(this._rndUSerUrl);

        if (!response.ok || response.status !== 200) {
            throw new Error(`Request for ${cityName} failed by this reason ${response.status}`);
        }
        // console.log(response.status);
        const parsedResponse = await response.json();
        // console.log(parsedResponse);
        return parsedResponse;
    }
}
