import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onDone, deleteItem, onImportant } from '../../actions';
import { searchData, filterData } from '../../helpers';
import TodoListItem from '../todo-list-item';
import './TodoList.scss';

/* eslint-disable-next-line no-shadow */
const TodoList = ({ todos, onDelete, onDone, onImportant }) => {
    const elements = todos.map((element) => {
        const { id, ...elementProps } = element;
        return (
            <li key={id} className='todo-list__item list-group-item'>
                <TodoListItem
                    {...elementProps}
                    onDelete={() => { onDelete(id); }}
                    onDone={() => { onDone(id); }}
                    onImportant={() => { onImportant(id); }}
                />
            </li>
        );
    });

    return (
        <ul className='todo-list list-group'>
            { elements }
        </ul>
    );
};

TodoList.defaultProps = {
    todos: [],
    onDelete: (f) => { return f; },
    onDone: (f) => { return f; },
    onImportant: (f) => { return f; },
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        id: PropTypes.number,
        important: PropTypes.bool,
        done: PropTypes.bool,
        shown: PropTypes.bool,
    })),
    onDelete: PropTypes.func,
    onDone: PropTypes.func,
    onImportant: PropTypes.func,
};

const mapStateToProps = ({ todoData, searchValue, sortedBy }) => {
    return {
        todos: filterData(searchData(todoData, searchValue), sortedBy),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => {
            return dispatch(deleteItem(id));
        },
        onDone: (id) => {
            return dispatch(onDone(id));
        },
        onImportant: (id) => {
            return dispatch(onImportant(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
