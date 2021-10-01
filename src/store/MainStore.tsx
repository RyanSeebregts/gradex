import React, {createContext, useReducer, Dispatch} from 'react';


interface State {
    photoUrl: string
    apiUrl: string
    mapKey: string
    height: number

    mobileOpen: boolean
    menuOpen: boolean
    loggedIn: boolean

    fullPadding: number
    mobilePadding: number
    browser: string

    artistType: string
    artistOpen: string

    jewelryArtists: any[]
    fineArtists: any[]
    visualArtists: any[]

}

interface StateContextType {
    state: State,
    dispatch: Dispatch<any>
}

const initialState = {
    photoUrl: 'https://gradex2021.s3.af-south-1.amazonaws.com/',
    apiUrl: 'http://localhost:8000',
    height: window.innerHeight,
    mapKey: 'AIzaSyDpJTRRgBI70kyCK83ReUPHKa_oxivp9u0',
    
    mobileOpen: false,
    loggedIn: false,
    menuOpen: false,

    fullPadding: 40,
    mobilePadding: 20,
    browser: '',

    artistType: '',
    artistOpen: '',

    jewelryArtists: [],
    fineArtists: [],
    visualArtists: []
};


const mainStore = createContext<StateContextType>({state: initialState, dispatch: () => {}});
const { Provider } = mainStore;

const MainStateProvider = ( { children }: any ) => {

    const [state, dispatch] = useReducer((state: State, action: any) => {
        switch(action.type) {
        case 'setHeight':
            return {
                ...state,
                height: action.height
            };

        case 'setArtists':
            return {
                ...state,
                jewelryArtists: action.jewelryArtists,
                fineArtists: action.fineArtists,
                visualArtists: action.visualArtists,
            };
        case 'setMenu':
            
            return {
                ...state,
                menuOpen: action.menuOpen
            };
        case 'setBrowser':
        
            return {
                ...state,
                browser: action.browser
            };
        case 'logout':
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            return {
                ...state,
                loggedIn: false
            };
        case 'setMobileOpen':
            return {
                ...state,
                mobileOpen: action.mobileOpen
            };

        case 'setPlaceFilters':
            return {
                ...state,
                placeFilters: action.placeFilters
            };

        case 'setEventFilters':
            return {
                ...state,
                eventFilters: action.eventFilters
            };

        case 'setEventDate':
            return {
                ...state,
                eventFilterStartDate: action.startDate,
                eventFilterEndDate: action.endDate,
                eventFilterDateType: action.dateType

            };

        case 'setArtist':
        
            return {
                ...state,
                artistOpen: action.artistOpen,
                artistType: action.artistType,
            };
        default:
            throw new Error();
        };
    }, initialState);

    const value = { state, dispatch };

    return <Provider value={value}>{children}</Provider>;
};

export { mainStore, MainStateProvider, initialState }