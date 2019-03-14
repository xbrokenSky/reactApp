import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { FaCloudSun } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import './AppHeader.scss';

const AppHeader = React.memo(({ toDo, done }) => {
    return (
        <section className='app-header d-flex'>
            <nav className='app-header__nav'>
                <NavLink
                    strict
                    exact
                    to='/'
                    className='app-header__nav-link'
                    activeClassName='selected'
                >
                    <h1 className='app-header__title'>
                        ToDo App
                    </h1>
                </NavLink>
                <NavLink
                    strict
                    exact
                    to='/weather/'
                    className='app-header__nav-link'
                    activeClassName='selected'
                >
                    <FaCloudSun />
                    Weather
                </NavLink>
                <NavLink
                    strict
                    exact
                    to='/persons/'
                    className='app-header__nav-link'
                    activeClassName='selected'
                >
                    <FiUsers />
                    Persons
                </NavLink>
            </nav>
            <h2 className='app-header__txt'>
                {toDo} more to do, {done} done
            </h2>
        </section>
    );
});

AppHeader.defaultProps = {
    toDo: 0,
    done: 0,
};

AppHeader.propTypes = {
    toDo: PropTypes.number,
    done: PropTypes.number,
};

const mapStateToProps = ({ todoData }) => {
    const doneItems = todoData.filter((item) => {
        return item.done;
    }).length;
    return {
        toDo: todoData.length - doneItems,
        done: doneItems,
    };
};

export default withRouter(connect(mapStateToProps, null)(AppHeader));
