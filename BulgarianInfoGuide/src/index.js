import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import Wonders from './components/wonders/WonderPage';
import Home from './components/home/HomePage';
import About from './components/about/AboutPage';
import Register from './components/register/RegisterPage';
import Login from './components/login/LoginPage';
import Logout from './components/logout/LogoutPage';
import Pleven from './components/cities/PlevenPage';
import Varna from './components/cities/VarnaPage';
import Sofia from './components/cities/SofiaPage';
import Provadia from './components/cities/ProvadiqPage';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="Pleven" component={Pleven}/>
            <Route path="Varna" component={Varna}/>
            <Route path="Sofia" component={Sofia}/>
            <Route path="Provadia" component={Provadia}/>
            <Route path="wonders" component={Wonders}/>
            <Route path="about" component={About}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
        </Route>
    </Router>,
    document.getElementById('root')
);