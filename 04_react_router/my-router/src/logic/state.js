import {atom, atomFamily, selector, selectorFamily} from 'recoil';

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

export const idsAtom = atom({
    key: 'idsAtom',
    default: []
});

export const articleAtom = atomFamily({
    key: 'articleAtom',
    default: null
});

export const artilceSelector = selectorFamily({
  key: "artilceSelector",
  get:  (id) => ({ get }) => {
      const atom = get(articleAtom(id));
      return atom;
  },
  set: (id) => ({set}, item) => {
    set(articleAtom(id), item);
    set(idsAtom, ids => {
        if (ids.includes(id)) {
            return ids;
        }
        return [...ids, id];
    });
  }
});

export const articleListSelector = selector({
    key: 'articleListSelector',
    /** 
     * Get all articles.
     * @param get a function to get atom.
     */
    get: ({get}) => {
        const ids = get(idsAtom);
        return ids.map(id => get(articleAtom(id)));
    },
    /** 
     * Set all articles.
     * @param get a function to get atom.
     * @param set a function to sett atom.
     * @param reset a function to reset atom.
     */
    set: ({get, set, reset}, item) => {
        console.log(item);
        set(articleAtom(item.id), item);
        set(idsAtom, ids => [...ids, item.id]);
    }
});