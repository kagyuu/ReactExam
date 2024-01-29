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

export const articleIdsAtom = atom({
    key: 'articleIdsAtom',
    default: []
});

export const articleIdsSelector = selector({
    key: 'articleIdsSelector',
    /** 
     * Numbering article id.
     * @param get a function to get atom.
     */
    get: ({get}) => {
        const ids = get(articleIdsAtom);
        return Math.max(...(ids.length ? ids : [0])) + 1;
    }
});

export const articleAtom = atomFamily({
    key: 'articleAtom',
    default: null
});

export const articleListSelector = selector({
    key: 'articleSelector',
    /** 
     * Get all articles.
     * @param get a function to get atom.
     */
    get: ({get}) => {
        const ids = get(articleIdsAtom);
        return ids.map(id => get(articleAtom(id)));
    },
    /** 
     * Set all articles.
     * @param get a function to get atom.
     * @param set a function to sett atom.
     * @param reset a function to reset atom.
     */
    set: ({get, set, reset}, item) => {
        set(item.id, item);
        set(articleIdsAtom, get(articleIdsAtom).add(item.id));
    }
});