import React from 'react';
import PropTypes from 'prop-types';
import { IoIosRefresh } from 'react-icons/io';
import { connect } from 'react-redux';
import { requestWeather } from '../../actions';
import { StyledForm, StyledButton, StyledErrorMessage } from '../styled-components';
import './WeatherChanger.scss';

// const WeatherChanger = ({ dispatch }) => {
//     let chosenCity;

//     const submit = (e) => {
//         e.preventDefault();

//         const cityValue = chosenCity.value.trim();

//         if (!cityValue) {
//             return null;
//         }

//         dispatch(requestWeather(cityValue));

//         chosenCity.value = '';

//         return null;
//     };

//     return (
//         <StyledForm className='weather-changer' onSubmit={submit}>
//             <input
//                 className='weather-changer__txt-field form-control'
//                 type='text'
//                 ref={(input) => { chosenCity = input; }}
//                 placeholder='Type new City here'
//             />
//             <StyledButton
//                 className='weather-changer__submit btn btn-primary'
//                 type='submit'
//                 title='Change City'
//             >
//                 Change city
//                 <IoIosRefresh className='weather-changer__icon' />
//             </StyledButton>
//         </StyledForm>
//     );
// };

class WeatherChanger extends React.Component {
    state = {
        cityValue: '',
        inputError: false,
    };

    submit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { cityValue, inputError } = this.state;

        if (!cityValue || inputError) {
            return null;
        }

        dispatch(requestWeather(cityValue));

        this.setState({
            cityValue: '',
        });

        return null;
    };

    validate = (e) => {
        const cityValue = e.target.value.trim();
        const fieldName = e.target.name;

        if (!/^[a-zA-Z]*$/.test(cityValue) || (cityValue.length > 0 && cityValue.length <= 2)) {
            this.setState({
                inputError: true,
            });
        } else {
            this.setState({
                inputError: false,
            });
        }

        this.setState((state) => {
            return {
                ...state,
                [fieldName]: cityValue,
            };
        });
        return null;
    };

    render() {
        const { cityValue, inputError } = this.state;
        const errorMsg = (inputError) ? <StyledErrorMessage>Enter correct city name</StyledErrorMessage> : null;
        const clazz = `weather-changer__txt-field form-control ${(inputError) ? 'error' : ''}`;

        return (
            <section className='weather-wrapper'>
                <StyledForm className='weather-changer' onSubmit={this.submit}>
                    <input
                        className={clazz}
                        type='text'
                        onChange={this.validate}
                        value={cityValue}
                        placeholder='Type new city here'
                        name='cityValue'
                    />
                    <StyledButton
                        className='weather-changer__submit btn btn-primary'
                        type='submit'
                        title='Change City'
                    >
                        Change city
                        <IoIosRefresh className='weather-changer__icon' />
                    </StyledButton>
                </StyledForm>
                {errorMsg}
            </section>
        );
    }
}

WeatherChanger.defaultProps = {
    // pickCity: (f) => { return f; },
    dispatch: (f) => { return f; },
};

WeatherChanger.propTypes = {
    // pickCity: PropTypes.func,
    dispatch: PropTypes.func,
};

export default connect()(WeatherChanger);
