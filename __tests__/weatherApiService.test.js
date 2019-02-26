import WeatherApiService from '../src/scripts/services';

describe('Check async request', () => {
    it('getData function test', () => {
        const { getData } = new WeatherApiService();
        return expect(getData('London')).resolves.toHaveProperty('main.temp');
    });
});
