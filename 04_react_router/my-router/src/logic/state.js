import {atom, atomFamily, selector} from 'recoil';

// CAUTION: Don't miss spell of "key" and "default".
//
// If you incorrectly type dafault as "deault", the whole app will stop working (the browser shows white screen)
// and Recoil reports an incorrect following error message : 
// "A component suspended while responding to synchronous input. 
// This will cause the UI to be replaced with a loading indicator. 
// To fix, updates that suspend should be wrapped with startTransition."

export const counterAtom = atom({
    key: 'counterAtom',
    default: 0
});

export const articlePkAtom = atom({
    key: 'articlePkAtom',
    default: []
});

export const articleAtom = atomFamily({
    key: 'articleAtom',
    default: null
});

export const articleSelector = selector({
    key: 'articleSelector',
    get: ({get}) => {

    },
    set: ({set, reset}, {type, id, newItem}) => {

    }
});