import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onSearch } from '../../actions';
import ItemStatusFilter from '../item-status-filter';
import './SearchPanel.scss';

/* eslint-disable-next-line no-shadow */
const SearchPanel = ({ onSearch }) => {
    const onValueEnter = (e) => {
        onSearch(e.target.value);
    };
    return (
        <section className='search-panel'>
            <input
                className='search-panel__search form-control'
                type='search'
                placeholder='search'
                onChange={onValueEnter}
            />
            <ItemStatusFilter />
        </section>
    );
};

SearchPanel.defaultProps = {
    onSearch: (f) => { return f; },
};

SearchPanel.propTypes = {
    onSearch: PropTypes.func,
};

const mapDispatchToprops = (dispatch) => {
    return {
        onSearch: (txt) => {
            return dispatch(onSearch(txt));
        },
    };
};

export default connect(null, mapDispatchToprops)(SearchPanel);
