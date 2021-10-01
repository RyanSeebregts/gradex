import React, { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components'
import FirstPage from './FirstPage'
import NavBar from '../components/NavBar'
import { mainStore, MainStateProvider } from '../store/MainStore'
import styles from '../constants'

import AboutPage from './AboutPage'
import GalleryPage from './GalleryPage'
import MeetUsPage from './MeetUsPage'
import EventsPage from './EventsPage';
import ContactPage from './ContactPage';
import TestPage from './TestPage'

import MenuIcon from '../components/MenuIcon';
import TransitionContainer from '../components/TransitionContainer';
import MatchGame  from '../components/MatchGame'
import ArtistsContainer  from '../components/ArtistsContainer'

import { MdEmail, MdCancel, MdCheck, MdKeyboardArrowDown, MdKeyboardArrowUp, MdSearch, MdColorLens, MdFitnessCenter, MdLocalActivity, MdLocalBar, MdLocalCafe, MdLocalMall, MdRestaurantMenu, MdShoppingCart } from 'react-icons/md';
import { logDOM } from '@testing-library/dom';

const Container = styled.div`
    top: 0px;
    left: 0px;
    position: absolute;
    height: 100%;
    width: 100%;
`

const PaddingElements = styled.div`
    position: fixed;
    z-index: 17;
    left: 0px;
    background: white;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const VerticalPaddingElements = styled.div`
    position: fixed;
    z-index: 12;
    background: white;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const MenuContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9;
    background: ${styles.black};
    top: 0px;
    left: 0px;
`

const MenuTopBottomContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

const MenuItemsContainer = styled.div`
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const MenuItem = styled.div`
    color: white;
    height: calc(100% / 5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    transition: all 0.2s ease;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
`

const MenuIconContainer = styled.div`
    cursor: pointer;

    position: fixed;
    z-index: 20;
    display: flex;

    justify-content: center;
    align-items: center;
`

const PaddingItems = styled.div`
    width: calc(100%/3);
    height: 100%;
    display: flex;
    align-items: center;
`

const VerticalPaddingItems = styled.div`
    height: calc(100%/3);
    width: 100%;
    display: flex;
    align-items: center;
`

interface propTypes {
    menuSetter: any
    setArtist: any
}

function Padding(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)

    const [debounceNext, setDebounceNext] = useState(false)

    let timer1:any = null

    useEffect(() => {
        

      
        return () => {
            clearTimeout(timer1)
        }
    }, [])


    return (
        <Container

        >
            <PaddingElements 
                style={{
                    height: state.mobileOpen ? `${2 * state.mobilePadding}px` : `${state.fullPadding}px`,
                    width: '100%',
                    top: '0px',
                }}
            >
                <PaddingItems
                    style={{
                        marginLeft: state.mobileOpen ? `${state.mobilePadding}px` : `${state.fullPadding}px`,
                    }}
                >
                    <img src={`${state.photoUrl}art/logo.png`} 
                        style={{height: '100%'}}
                    />
                </PaddingItems>
                <PaddingItems />


                <PaddingItems
                    onClick={() => props.menuSetter(!state.menuOpen)}
                    style={{
                        fontSize: '15px',
                        justifyContent: 'flex-end',
                        height: '100%',
                        alignItems: 'center',

                    }}
                >
                    <div 
                        style={{
                            width: state.mobileOpen ? `${2 * state.mobilePadding}px` : `${state.fullPadding}px`, 
                            height: '100%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            paddingRight: state.mobileOpen ? `${state.mobilePadding}px` : '0px'
                        }}
                    >
                        <MenuIcon mobileOpen={state.mobileOpen} open={state.menuOpen} color={styles.headingColor} />
                    </div>
                </PaddingItems>

            </PaddingElements>

            <PaddingElements 
                style={{

                    height: state.mobileOpen ? `${2*state.mobilePadding}px` : `${state.fullPadding}px`,
                    width: '100%',
                    bottom: '0px'
                }}
            >
                <PaddingItems>
                    <a 
                        href="mailto:contact@test.com"
                        style={{
                            marginLeft: state.mobileOpen ? `${state.mobilePadding}px` : `${state.fullPadding}px`,
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0px 10px', 
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: `${styles.headingColor}`,
                            fontSize: state.mobileOpen ? '20px' : '25px'
                        }}
                    >
                        <MdEmail 
                            onClick={emailOpener}
                        />
                    </a>
                    
                </PaddingItems>

                <PaddingItems
                    style={{
                        fontSize: state.mobileOpen ? '10px' : '15px',
                        justifyContent: 'center',

                    }}
                >
                    TO TOP
                </PaddingItems>

                <PaddingItems 
                    style={{
                        fontSize:  state.mobileOpen ? '6px' : '15px',
                        justifyContent: 'flex-end',
                    }}
                >
                    <div 
                        style={{
                            paddingRight: state.mobileOpen ? `${state.mobilePadding}px` : `${state.fullPadding}px`,
                        }}
                    >
                        Copyright © 2021 GradeX
                    </div>
                </PaddingItems>

            </PaddingElements>

            <VerticalPaddingElements
                style={{
                    width: state.mobileOpen ? `${state.mobilePadding}px` : `${state.fullPadding}px`,
                    height: state.mobileOpen ? `calc(100% - ${2 * state.mobilePadding}px)` : `calc(100% - ${2 * state.fullPadding}px)`,
                    top: state.mobileOpen ? `${state.mobilePadding}px` : `${state.fullPadding}px`,
                    left: '0px'
                }}
            >
                <VerticalPaddingItems />
                <VerticalPaddingItems
                    onClick={() => goBackArtist()}
                    style={{
                        fontSize: '15px',
                        justifyContent: 'center',
                        height: '100%',
                        alignItems: 'center',
                        writingMode: 'vertical-lr',
                        textOrientation: 'mixed',
                        cursor: !state.menuOpen && state.artistOpen || state.artistType ? 'pointer' : 'default',
                        opacity: !state.menuOpen && state.artistOpen || state.artistType ? 1 : 0,
                        transition: 'all 0.2s ease'
                    }}
                >go-back</VerticalPaddingItems>

                <VerticalPaddingItems />

            </VerticalPaddingElements>

            <VerticalPaddingElements
                style={{
                    width: state.mobileOpen ? `${state.mobilePadding}px` : `${state.fullPadding}px`,
                    height: state.mobileOpen ? `calc(100% - ${2 * state.mobilePadding}px)` : `calc(100% - ${2 * state.fullPadding}px)`,
                    top: state.mobileOpen ? `${state.mobilePadding}px` : `${state.fullPadding}px`,
                    right: '0px'
                }}
            >
                <VerticalPaddingItems />
                <VerticalPaddingItems
                    onClick={() => nextArtist()}
                    style={{
                        fontSize: '15px',
                        justifyContent: 'center',
                        height: '100%',
                        alignItems: 'center',
                        writingMode: 'vertical-lr',
                        textOrientation: 'mixed',
                        cursor: !state.menuOpen && state.artistOpen || state.artistType ? 'pointer' : 'default',
                        opacity: !state.menuOpen && state.artistOpen || state.artistType ? 1 : 0,
                        transition: 'all 0.2s ease'
                    }}
                >next</VerticalPaddingItems>

                <VerticalPaddingItems />
            </VerticalPaddingElements>

            
        </Container>
    );

    function emailOpener() {
        window.location.assign("mailto:xyz@abc.com");
    }

    function goBackArtist() {
        if(state.artistOpen === '') {
            props.setArtist('', '')
        }

        else {
            props.setArtist(state.artistType, '')
        }
    }

    function nextArtist() {
        if(state.artistOpen === '') {
            if(!debounceNext) {
                console.log(state.artistType)
                setDebounceNext(true)
                if(state.artistType === 'jewelry')  
                    props.setArtist('', 'fine')

                if(state.artistType === 'fine')  
                    props.setArtist('', 'visual')

                if(state.artistType === 'visual')  
                    props.setArtist('', 'jewelry')

                timer1 = setTimeout(() => setDebounceNext(false), 500)
            }

        }

        else {
            props.setArtist(state.artistType, '')
        }
    }
}

export default Padding;