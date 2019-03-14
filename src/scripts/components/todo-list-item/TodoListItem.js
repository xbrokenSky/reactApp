import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt, FaExclamation } from 'react-icons/fa';
import './TodoListItem.scss';

const TodoListItem = React.memo(({
    label = '', important = false, done = false, onDelete, onDone, onImportant,
}) => {
    let classNames = 'todo-wrapper__item-txt';
    if (done) {
        classNames += ' done';
    }
    if (important) {
        classNames += ' important';
    }
    return (
        <div className='todo-wrapper'>
            <span className={classNames} onClick={onDone} role='menuitem'>
                {label}
            </span>
            <div className='todo-wrapper__btn-wrapper'>
                <button type='button' className='todo-wrapper__item-btn btn-outline-danger' onClick={onDelete}>
                    <FaTrashAlt />
                </button>
                <button type='button' className='todo-wrapper__item-btn btn-outline-success' onClick={onImportant}>
                    <FaExclamation className='todo-wrapper__item-icon' />
                </button>
            </div>
        </div>
    );
});

TodoListItem.defaultProps = {
    onDelete: (f) => {
        return f;
    },
    important: false,
    done: false,
    onImportant: (f) => {
        return f;
    },
    onDone: (f) => {
        return f;
    },
};

TodoListItem.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    important: PropTypes.bool,
    done: PropTypes.bool,
    onImportant: PropTypes.func,
    onDone: PropTypes.func,
};

export default TodoListItem;
