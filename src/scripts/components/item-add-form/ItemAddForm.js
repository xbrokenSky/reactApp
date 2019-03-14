import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaFeatherAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { addItem } from '../../actions';
import './ItemAddForm.scss';

const ItemAddForm = React.memo(({ dispatch = (f) => { return f; } }) => {
    const [todoValue, setTodoValue] = useState('');

    const submit = (e) => {
        e.preventDefault();

        if (!todoValue) {
            return null;
        }

        dispatch(addItem(todoValue));

        setTodoValue('');

        return null;
    };

    return (
        <form className='add-item-form' onSubmit={submit}>
            <input
                value={todoValue}
                type='text'
                placeholder='Write new todo here'
                className='add-item-form__txt form-control'
                onChange={(e) => {
                    setTodoValue(e.target.value.trim());
                }}
            />
            <button
                type='submit'
                className='add-item-form__btn btn btn-primary'
                title='Add new todo'
                disabled={todoValue === ''}
            >
                Add item
                <FaFeatherAlt className='add-item-form__icon' />
            </button>
        </form>
    );
});


ItemAddForm.defaultProps = {
    dispatch: (f) => { return f; },
};

ItemAddForm.propTypes = {
    dispatch: PropTypes.func,
};

export default connect()(ItemAddForm);
