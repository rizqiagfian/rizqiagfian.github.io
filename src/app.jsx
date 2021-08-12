import React, { useState, useEffect, useRef } from "react"
import AppTopBar from "./appTopBar"
import AppFooter from "./appFooter"
import Home from "./home";
import Menu from "./Menu";
import Franchising from "./Franchising";
import About from "./About";
import "./style.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {

    return (
        <>

            <Router>
                <div style={{ width: "80%" , marginLeft: "10%" }}>


                    {/* <AppTopBar /> */}


                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/" component={Home} />

                        <Route exact path="/menu" component={Menu} />
                        <Route exact path="/franchising" component={Franchising} />
                        <Route exact path="/about" component={About} />

                    </Switch>

                    <AppFooter />
                </div>
            </Router>


        </>
    )
}

export default App