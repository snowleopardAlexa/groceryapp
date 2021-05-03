import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultVal) {
    // make piece of state, based on value in localstorage (or default)
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(
                window.localStorage.getItem(key) || String(defaultValue)
            );
        } catch (e) {
            val = defaultVal;
        }
        return val;
    });
    // useEffect to update localstorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
} 

export default useLocalStorageState;

// What try/catch block is:
// try - lets you test a block of code for errors
// catch - lets you handle the error
// throw - lets you create custom errors
// finally - lets you execute code, after try and catch, regardless the result