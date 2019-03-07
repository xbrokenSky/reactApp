import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import './WeatherDetails.scss';

const WeatherDetails = ({ data, loading }) => {
    const { name, main } = data;

    if (loading) {
        return (
            <Spinner />
        );
    }

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
    loading: false,
    data: {},
};

WeatherDetails.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,
};

const mapStateToProps = ({ weatherData, isDataLoading }) => {
    return {
        data: weatherData,
        loading: isDataLoading,
    };
};

export default connect(mapStateToProps, null)(WeatherDetails);
