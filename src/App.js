import React from 'react';
import { HomeDefault } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotPassword';
import Provider from './provider/provider';
import AuthUserProvider from './provider/auth-user-provider';
import Move from './pages/move';

const App = () => {
    return (
        <AuthUserProvider>
            <Router>
                <Provider>
                    <Switch>
                            <Route path="/" exact>
                                <HomeDefault />
                            </Route>
                            <Route path="/login" exact>
                                <Login/>
                            </Route>
                            <Route path="/register" exact>
                                <Register/>
                            </Route>
                            <Route path="/forgot-password" exact>
                                <ForgotPassword/>
                            </Route>
                            <Route path="*" exact>
                                <Move/>
                            </Route>
                    </Switch>
                </Provider>
            </Router>
        </AuthUserProvider>
    )
}

export default App;