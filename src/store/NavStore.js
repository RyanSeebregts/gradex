import React, {createContext, useReducer} from 'react';

const initialState = {
    
    //main menu navigation
    screenOpen: 'map',


};
const navStore = createContext(initialState);
const { Provider } = navStore;

const NavStateProvider = ( { children } ) => {

    const [navState, navDispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'setScreenOpen':
                return {
                    ...state,
                    screenOpen: action.screenOpen
                };

            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ navState, navDispatch }}>{children}</Provider>;
};

export { navStore, NavStateProvider, initialState }