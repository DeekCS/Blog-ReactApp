import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import '././Style/style'
import Post from "./component/Post/Post";
import './App.css';
import Header from "./component/Header/Header";
import Registiration from "./component/Login/Registiration";
import LoginForm from "./component/Login/LoginForm";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";

// import { useHistory } from "react-router-dom";
// import history from './history';

const App = () => {
    return (
        <Router  >
            <Header />
            <Switch>
                <Route exact path="/" component={Banner} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/register" component={Registiration} />
                <Route exact path="/login" component={LoginForm} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
