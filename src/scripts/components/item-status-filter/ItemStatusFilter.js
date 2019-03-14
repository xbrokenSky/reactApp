import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onFilter } from '../../actions';
import './ItemStatusFilter.scss';

/* eslint-disable-next-line no-shadow */
const ItemStatusFilter = React.memo(({ sortedBy, onFilter }) => {
    const btns = [
        {
            name: 'all',
            title: 'All',
        },
        {
            name: 'active',
            title: 'Active',
        },
        {
            name: 'done',
            title: 'Done',
        },
    ];

    const buttons = btns.map(({ name, title }) => {
        const clazz = (sortedBy === name) ? 'btn-info' : 'btn-outline-secondary';
        return (
            <button
                type='button'
                key={name}
                className={`item-status-filter__btn btn ${clazz}`}
                onClick={() => { onFilter(name); }}
                title={`Sort ${title} items`}
            >
                {title}
            </button>
        );
    });

    return (
        <div className='item-status-filter btn-group'>
            {buttons}
        </div>
    );
});

ItemStatusFilter.defaultProps = {
    onFilter: (f) => { return f; },
    sortedBy: '',
};

ItemStatusFilter.propTypes = {
    onFilter: PropTypes.func,
    sortedBy: PropTypes.string,
};

const mapStateToProps = ({ sortedBy }) => {
    return {
        sortedBy,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: (category) => {
            return dispatch(onFilter(category));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter);
