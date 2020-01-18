import React from "react";
import Header from "../Header/Header";
import Intro from "../Intro/intro";
import About_me from "../About_me/about_me";
import Requirements from "../Requirements/requirements";
import Users from "../Users/users";
import Register from "../Register/register";

const App = () => {
    return (
        <>
            <Header/>
            <Intro/>
            <About_me/>
            <Requirements/>
            <Users/>
            <Register/>
        </>
    );
};

export default App;