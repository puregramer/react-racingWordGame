/***
 * file name : Intro/index.js
 * description : Intro component
 * create date : 2019-01-14
 * creator : saltgamer
 ***/

import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {$SoundEffector, gameScreen, setResponsive} from '../../Globals';
import Responsive from '../../Responsive';
import Spritesheet from 'react-responsive-spritesheet';
import '../../../style/intro.css';

let sheetSize = {};

export default class Intro extends Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            startGame: false
        };

        console.log('~~> Intro state: ', this.state);
    }


    componentDidMount() {
        console.log('~~> this.props: ', this.props);

        setResponsive(new Responsive(gameScreen));

        setTimeout(() => {
            this.props.hideLoading();
            console.log(this.props.isLoading);
            $SoundEffector.play(1);
        }, 500);

        setTimeout(() => {
            this.setState({startGame: true});
        }, 4000);

    }

    getSheet() {
        switch (window.GAME_CODE) {
            case 'unit5-1':
                sheetSize.width = 607;
                sheetSize.height = 658;
                return './assets/scene/introTitleSheet5-1.png';
            case 'unit5-2':
                sheetSize.width = 607;
                sheetSize.height = 658;
                return './assets/scene/introTitleSheet5-2.png';
            case 'unit5-3':
                sheetSize.width = 607;
                sheetSize.height = 658;
                return './assets/scene/introTitleSheet5-3.png';
            case 'unit5-4':
                sheetSize.width = 607;
                sheetSize.height = 658;
                return './assets/scene/introTitleSheet5-4.png';
            case 'unit5-5':
                sheetSize.width = 717;
                sheetSize.height = 658;
                sheetSize.left = 280;
                return './assets/scene/introTitleSheet5-5.png';
            case 'unit5-6':
                sheetSize.width = 717;
                sheetSize.height = 658;
                sheetSize.left = 280;
                return './assets/scene/introTitleSheet5-6.png';
            case 'unit5-7':
                sheetSize.width = 717;
                sheetSize.height = 658;
                sheetSize.left = 280;
                return './assets/scene/introTitleSheet5-7.png';
            case 'unit5-8':
                sheetSize.width = 849;
                sheetSize.height = 658;
                sheetSize.left = 215;
                return './assets/scene/introTitleSheet5-8.png';
            case 'unit5-9':
                sheetSize.width = 915;
                sheetSize.height = 658;
                sheetSize.left = 182;
                return './assets/scene/introTitleSheet5-9.png';
            case 'unit6-1':
                sheetSize.width = 607;
                sheetSize.height = 658;
                return './assets/scene/introTitleSheet6-1.png';
            case 'unit6-2':
                sheetSize.width = 717;
                sheetSize.height = 658;
                sheetSize.left = 280;
                return './assets/scene/introTitleSheet6-2.png';
            case 'unit6-3':
                sheetSize.width = 849;
                sheetSize.height = 658;
                sheetSize.left = 215;
                return './assets/scene/introTitleSheet6-3.png';
            case 'unit6-4':
                sheetSize.width = 849;
                sheetSize.height = 658;
                sheetSize.left = 215;
                return './assets/scene/introTitleSheet6-4.png';
            case 'unit6-5':
                sheetSize.width = 717;
                sheetSize.height = 658;
                sheetSize.left = 280;
                return './assets/scene/introTitleSheet6-5.png';
            case 'unit6-6':
                sheetSize.width = 717;
                sheetSize.height = 658;
                sheetSize.left = 280;
                return './assets/scene/introTitleSheet6-6.png';
            case 'unit6-7':
                sheetSize.width = 717;
                sheetSize.height = 658;
                sheetSize.left = 280;
                return './assets/scene/introTitleSheet6-7.png';
            case 'unit6-8':
                sheetSize.width = 717;
                sheetSize.height = 658;
                sheetSize.left = 280;
                return './assets/scene/introTitleSheet6-8.png';
            case 'unit6-9':
                sheetSize.width = 915;
                sheetSize.height = 658;
                sheetSize.left = 182;
                return './assets/scene/introTitleSheet6-9.png';
        }
    }

    render() {
        const {
            startGame
        } = this.state;

        if (startGame) {
            return (
                <Redirect to={{
                    pathname: '/selectchar'
                }}
                />
            );
        } else {
            return (
                <div className="introBg">
                    {/*<Link to="/selectchar"><div className="introButton">게임 시작</div></Link>*/}

                    <Spritesheet
                        className={`introTitle`}
                        image={this.getSheet()}
                        style={(sheetSize.left ? {left: sheetSize.left} : {})}
                        widthFrame={sheetSize.width}
                        heightFrame={sheetSize.height}
                        steps={2}
                        fps={6}
                        loop={true}
                    />
                </div>
            );
        }



    }
}