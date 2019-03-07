import React from 'react';
import PersonList from '../person-list';
import ErrorCatcher from '../error-catcher';

const PersonPage = () => {
    return (
        <ErrorCatcher>
            <PersonList />
        </ErrorCatcher>
    );
};

export default PersonPage;
