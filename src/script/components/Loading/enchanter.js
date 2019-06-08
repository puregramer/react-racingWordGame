/***
 * file name : Loading/enchanter.js
 * description : Loading enchanter
 * create date : 2019-01-09
 * creator : saltgamer
 ***/
import {connect} from "react-redux";
import Loading from './index';

function mapStateToProps(state) {
    const {
        isLoading,

    } = state;
    return {
        isLoading,
    };
}

export default connect(mapStateToProps)(Loading);


