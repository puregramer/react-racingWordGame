/***
 * file name : Intro/enchanter.js
 * description : Intro enchanter
 * create date : 2019-01-14
 * creator : saltgamer
 ***/

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators as Actions} from "../../reducer";
import {withRouter} from 'react-router-dom';
import Intro from './index';

function mapStateToProps(state) {
    const {
        isLoading,
    } = state;
    return {
        isLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showLoading: bindActionCreators(Actions.showLoading, dispatch),
        hideLoading: bindActionCreators(Actions.hideLoading, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Intro));