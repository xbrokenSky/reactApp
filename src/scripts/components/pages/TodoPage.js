import React from 'react';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

const TodoPage = () => {
    return (
        <React.Fragment>
            <SearchPanel />
            <TodoList />
            <ItemAddForm />
        </React.Fragment>
    );
};

export default TodoPage;
