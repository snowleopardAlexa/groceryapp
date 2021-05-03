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

} 


export default useLocalStorageState;