import React from 'react';
import PropTypes from 'prop-types';
import './WeatherDetails.scss';

const WeatherDetails = ({ data }) => {
    const { name, main } = data;

    return (
        <section className='weather-details'>
            <h1 className='weather-details__title'>
                {`Weather for ${name} city`}
            </h1>
            <article className='weather-details__card'>
                <h2 className='weather-details__card-title'>
                    {`Current temperature: ${main.temp} ˚C`}
                </h2>
                <p className='weather-details__card-txt'>
                    {`Minimum temperature: ${main.temp_min} ˚C`}
                </p>
                <p className='weather-details__card-txt'>
                    {`Current pressure: ${main.pressure}`}
                </p>
            </article>
        </section>
    );
};

WeatherDetails.defaultProps = {
    data: {},
};

WeatherDetails.propTypes = {
    data: PropTypes.object,
};

export default WeatherDetails;
