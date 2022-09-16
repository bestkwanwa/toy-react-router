import React, { useState } from "react";
import "./App.css";
import Router, { Link, navigate } from './Router';

const App = () => (
    <Router
        routes={[
            { path: '/', component: <Home /> },
            { path: '/home', component: <Home /> },
            { path: '/articles', component: <Articles /> },
            { path: '/details', component: <Details /> }
        ]}
    />
)

const Home = () => (
    <div>
        <h1>Home Page.</h1>
        <Link className={'link'} href="/articles">go articles</Link>,
        <span onClick={() => navigate('/details')}>or click here to jump to details</span>
    </div>
)

const Articles = () => (
    <div>
        <h1>Articles Page.</h1>
        <Link href="/home">go home</Link>,
        <span onClick={() => navigate('/details')}>or click here to jump to details</span>
    </div>
)

const Details = () => (
    <div>
        <h1>Details Page.</h1>
        <Link href="/home">go home</Link>
    </div>
)

export default App;