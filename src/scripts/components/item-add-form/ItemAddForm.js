import React from 'react';
import PropTypes from 'prop-types';
import { FaFeatherAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { addItem } from '../../actions';
import './ItemAddForm.scss';

const ItemAddForm = ({ dispatch = (f) => { return f; } }) => {
    let newItem;
    const submit = (e) => {
        e.preventDefault();
        if (!newItem.value.trim()) {
            return null;
        }
        dispatch(addItem(newItem.value));
        newItem.value = '';
        return null;
    };
    return (
        <form className='add-item-form' onSubmit={submit}>
            <input
                ref={(input) => { newItem = input; }}
                type='text'
                placeholder='Write new todo here'
                className='add-item-form__txt form-control'
            />
            <button
                type='submit'
                className='add-item-form__btn btn btn-primary'
                title='Add new todo'
            >
                Add item
                <FaFeatherAlt className='add-item-form__icon' />
            </button>
        </form>
    );
};


ItemAddForm.defaultProps = {
    dispatch: (f) => { return f; },
};

ItemAddForm.propTypes = {
    dispatch: PropTypes.func,
};

export default connect()(ItemAddForm);
