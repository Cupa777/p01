import React from 'react';


import './App.css';
import Header from "./Components/Header";
import Login from "./Components/Login";



function App() {
    return (
        <div className="App">
            <div className="Header">
            <Header />
            </div>
            <div className="Login">
            <Login />
            </div>
        </div>
    );
}

export default App;
