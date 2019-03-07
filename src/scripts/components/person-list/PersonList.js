import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncPersonRequest } from '../../actions';
import PersonCard from '../person-card';
import Spinner from '../spinner';
import './PersonList.scss';

class PersonList extends React.Component {
    static defaultProps = {
        dispatch: (f) => { return f; },
        personData: {},
        isPersonLoading: false,
    }

    static propTypes = {
        dispatch: PropTypes.func,
        personData: PropTypes.object,
        isPersonLoading: PropTypes.bool,
    }

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(asyncPersonRequest());
    }

    componentDidMount() {

    }

    render() {
        const { personData, isPersonLoading } = this.props;

        if (isPersonLoading) {
            return (
                <Spinner />
            );
        }

        if (personData.error) {
            return (
                <p>
                    {personData.error}
                </p>
            );
        }

        const content = personData.results.map((item) => {
            const { id, ...data } = item;
            return (
                <PersonCard key={id.value} data={data} />
            );
        });

        return (
            <div className='person-list'>
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        personData: state.personData,
        isPersonLoading: state.isPersonLoading,
    };
};

export default connect(mapStateToProps, null)(PersonList);
