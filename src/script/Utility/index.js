/***
 * file name : Utility/index.js
 * description : utility functions
 * create date : 2019-01-10
 * creator : saltgamer
 ***/

export function $qs(selector) {
    return document.querySelector(selector);
}

export function $qsa(selector) {
    return document.querySelectorAll(selector);
}

export function randomInt(upper) {
    return Math.floor(upper * Math.random());
}

export function studyFinish() {
    swcontobj && swcontobj.fnClkStudyFinish && swcontobj.fnClkStudyFinish();
}