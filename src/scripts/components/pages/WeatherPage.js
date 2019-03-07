import React from 'react';
import WeatherDetails from '../weather-details';
import WeatherChanger from '../weather-changer';
import ErrorCatcher from '../error-catcher';

const WeatherPage = () => {
    return (
        <div className='weather-page'>
            <ErrorCatcher>
                <WeatherDetails />
            </ErrorCatcher>
            <WeatherChanger />
        </div>
    );
};

export default WeatherPage;
