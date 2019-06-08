/***
 * file name : Reducer/index.js
 * description : Reducer script
 * create date : 2019-01-14
 * creator : saltgamer
 ***/
import {$currentAni, $currentCar, $currentStep, $currentRank, $isExitLayerPop} from '../Globals';

// Imports

// Actions

const SHOW_LOADING = 'SHOW_LOADING';
const HIDE_LOADING = 'HIDE_LOADING';
const SELECT_CAR = 'SELECT_CAR';
const CAR_ANI = 'CAR_ANI';
const CHANGE_STEP = 'CHANGE_STEP';
const CHANGE_RANK = "CHANGE_RANK";

// Action Creators

function showLoading() {
    return {
        type: SHOW_LOADING
    };
}

function hideLoading() {
    return {
        type: HIDE_LOADING
    };
}

function selectCar() {
    return {
        type: SELECT_CAR
    };
}

function carAni() {
    return {
        type: CAR_ANI
    };
}

function changeStep() {
    return {
        type: CHANGE_STEP
    };
}

function changeRank() {
    return {
        type: CHANGE_RANK
    };
}


// Reducer

const initialState = {
    isLoading: true,
    selectedCar: null,
    currentCarAni: 'intro',
    currentStep: 0,
    currentRank: 4,
};

export default function reducer(state = initialState, action) {
    console.log('~> reducer state: ', state);
    switch (action.type) {
        case SHOW_LOADING:
            return applyShowLoading(state, action);
        case HIDE_LOADING:
            return applyHideLoading(state, action);
        case SELECT_CAR:
            return applySelectCar(state, action);
        case CAR_ANI:
            return applyCarAni(state, action);
        case CHANGE_STEP:
            return applyChangeStep(state, action);
        case CHANGE_RANK:
            return applyChangeRank(state, action);

        default:
            return state;
    }
}

// Reducer Functions

function applyShowLoading(state, action) {
    console.log('~~> state: ', state);
    console.log('~~> action: ', action);
    return {
        // ...state,
        isLoading: true,
        selectedCar: state.selectCar,
        // currentCarAni: state.currentCarAni
    };
}

function applyHideLoading(state, action) {
    console.log('~~> state: ', state);
    console.log('~~> action: ', action);
    return {
        // ...state,
        isLoading: false,
        selectedCar: state.selectCar,
        currentCarAni: state.currentCarAni,
        currentStep: state.currentStep,
        currentRank: state.currentRank,
    };
}

function applySelectCar(state, action) {
    console.log('~~> state: ', state);
    console.log('~~> action: ', action);
    console.log('~~> selectedCar: ', $currentCar);
    return {
        // ...state,
        isLoading: state.isLoading,
        currentCarAni: state.currentCarAni,
        currentStep: state.currentStep,
        currentRank: state.currentRank,
        selectedCar: $currentCar,
    };
}

function applyCarAni(state, action) {
    console.log('~~> state: ', state);
    console.log('~~> action: ', action);
    console.log('~~> $currentAni: ', $currentAni);
    return {
        // ...state,
        isLoading: state.isLoading,
        selectedCar: state.selectedCar,
        currentStep: state.currentStep,
        currentRank: state.currentRank,
        currentCarAni: $currentAni
    };
}


function applyChangeStep(state, action) {
    console.log('~~> state: ', state);
    console.log('~~> action: ', action);
    return {
        // ...state,
        isLoading: state.isLoading,
        selectedCar: state.selectedCar,
        currentCarAni: state.currentCarAni,
        currentRank: state.currentRank,
        currentStep: $currentStep

    };
}


function applyChangeRank(state, action) {
    console.log('~~> state: ', state);
    console.log('~~> action: ', action);
    return {
        // ...state,
        isLoading: state.isLoading,
        selectedCar: state.selectedCar,
        currentCarAni: state.currentCarAni,
        currentStep: state.currentStep,
        currentRank: $currentRank
    };
}


// Exports
export const actionCreators = {
    showLoading,
    hideLoading,
    selectCar,
    carAni,
    changeStep,
    changeRank,
};
