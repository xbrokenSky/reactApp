import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from '../app-header';
import { TodoPage, WeatherPage, PersonPage } from '../pages';
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    <AppHeader />
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={TodoPage}
                        />
                        <Route
                            path='/weather/'
                            component={WeatherPage}
                        />
                        <Route
                            path='/persons/'
                            component={PersonPage}
                        />
                        <Redirect to='/' />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
