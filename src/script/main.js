/***
 * file name : main.js
 * description : PPaper entry file
 * create date : 2019-01-14
 * creator : saltgamer
 ***/

// https://www.npmjs.com/package/react-responsive-spritesheet#installation
// https://github.com/hyperfuse/react-anime


import React from 'react';
import ReactDOM from 'react-dom';
import GameRouter from './Router';
import Loading from './components/Loading/enchanter';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducer from './reducer';
import {gameScreen, setSoundEffector} from './Globals';

import '../style/normalize.css';
import '../style/racingWordGame.css';
import SoundEffector from "./SoundEffector";

let store = createStore(reducer);

const soundEffector = new SoundEffector([
    './assets/sound/bgm.mp3',
    './assets/sound/introStart.mp3',
    './assets/sound/selectChar.mp3',
    './assets/sound/gameStart.mp3',
    './assets/sound/QuestionBox.mp3',
    './assets/sound/stopwatch.mp3',
    './assets/sound/panelClick.mp3',
    './assets/sound/levelUp.mp3',
    './assets/sound/car_Idle.mp3',
    './assets/sound/car_drift.mp3',
    './assets/sound/correct.mp3',
    './assets/sound/inCorrect.mp3',
    './assets/sound/awards.mp3',
    './assets/sound/retry.mp3',
    './assets/sound/lateness.mp3',
]);

setSoundEffector(soundEffector);

ReactDOM.render(
    <Provider store={store}>
        <GameRouter/>
        <Loading/>
    </Provider>,
    gameScreen,
    () => {
        console.log('~> render complete!');
    });