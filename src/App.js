import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import '././Style/style'
import Post from "./component/Post/Post";
import './App.css';
import Header from "./component/Header/Header";
import Registration from "./component/Login/RegistrationForm";
import LoginForm from "./component/Login/LoginForm";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";


const App = () => {
    return (
        <Router  >
            <Header />
            <Switch>
                <Route exact path="/" component={Banner} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/register" component={Registration} />
                <Route exact path="/login" component={LoginForm} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
