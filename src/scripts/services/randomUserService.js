import fetch from 'isomorphic-fetch';

export default class RandomUserService {
    _baseUrl = 'https://randomuser.me/api/?format=json&nat=gb';

    _urlQuantityOption = '&results=';

    getPersons = async (value) => {
        const response = await fetch(`${this._baseUrl}${this._urlQuantityOption}${value}`);

        if (!response.ok || response.status !== 200) {
            throw new Error(`Request for ${value} persons is failed by this reason ${response.status}`);
        }

        const parsedResponse = await response.json();

        return parsedResponse;
    };
}
