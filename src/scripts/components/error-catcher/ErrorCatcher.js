import React from 'react';
import PropTypes from 'prop-types';
import ErrorHandler from '../error-handler';
import './ErrorCatcher.scss';

export default class ErrorCatcher extends React.Component {
    static defaultProps = {
        children: {},
    }

    static propTypes = {
        children: PropTypes.object,
    }

    constructor(props) {
        super(props);
        this.state = {
            error: false,
        };
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return {
            error: true,
        };
    }

    render() {
        const { error } = this.state;
        if (error) {
            return (
                <ErrorHandler />
            );
        }

        return this.props.children;
    }
}
