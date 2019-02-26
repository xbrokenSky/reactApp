import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../spinner';
// import ErrorHandler from '../error-handler';
import WeatherDetails from '../weather-details';
import WeatherChanger from '../weather-changer';
import ErrorCatcher from '../error-catcher';
// import requestWeather from '../../actions';

const WeatherPage = ({ data, loading }) => {
    // if (error) {
    //     return (
    //         <ErrorHandler />
    //     );
    // }

    if (loading) {
        return (
            <Spinner />
        );
    }

    return (
        <div className='weather-page'>
            <ErrorCatcher>
                <WeatherDetails data={data} />
            </ErrorCatcher>
            <WeatherChanger />
        </div>
    );
};

WeatherPage.defaultProps = {
    // error: false,
    // pickCity: (f) => { return f; },
    loading: false,
    data: {},
};

WeatherPage.propTypes = {
    // error: PropTypes.bool,
    // pickCity: PropTypes.func,
    loading: PropTypes.bool,
    data: PropTypes.object,
};

const mapStateToProps = ({ weatherData, isDataLoading }) => {
    return {
        data: weatherData,
        loading: isDataLoading,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         pickCity: (cityName) => {
//             return dispatch(requestWeather(cityName));
//         },
//     };
// };

export default connect(mapStateToProps, null)(WeatherPage);
