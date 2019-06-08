/***
 * file name : Router/index.js
 * description : Router component
 * create date : 2019-01-14
 * creator : saltgamer
 ***/

import React, {Fragment} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Intro from '../components/Intro/enchanter';
import InGame from '../components/InGame/enchanter';
import SelectChar from '../components/SelectChar/enchanter';
import Awards from '../components/Awards/enchanter';
import Lateness from '../components/Awards/enchanterLateness';

const GameRouter = () => (
    <Router >
        <Fragment>
            <Route path="/" exact component={Intro}/>
            <Route path="/index.html" component={Intro}/>
            <Route path="/selectchar" component={SelectChar}/>
            <Route path="/ingame" component={InGame}/>
            <Route path="/awards" component={Awards}/>
            <Route path="/lateness" component={Lateness}/>

        </Fragment>

    </Router>
);

export default GameRouter;