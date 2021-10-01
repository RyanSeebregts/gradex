import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components'
import { mainStore } from '../store/MainStore';
import styles from '../constants';

import FirstPage from './FirstPage'
import AboutPage from './AboutPage'
import GalleryPage from './GalleryPage'
import MeetUsPage from './MeetUsPage'
import EventsPage from './EventsPage';
import ContactPage from './ContactPage';

import MatchGame  from '../components/MatchGame'

const Container = styled.div`
    position: fixed;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    pointer-events: none;

`


const ContentContainer = styled.div`
    flex-shrink: 0;
    pointer-events: auto;

    overflow-x: hidden;
    background: ${styles.background};
    overflow-y: scroll;
`

interface propTypes {
    mouseX: any
    mouseY: any
    setArtist: any
}
function Content(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)
    const [pageScroll, setPageScroll] = useState(0)

    const scrollRef = useRef<HTMLDivElement>(null)

    return (
        <Container>
            <ContentContainer 
                onScroll={scrollEvent}

                style={{
                    height: state.mobileOpen ? `calc(100% - ${2*state.mobilePadding}px)` : `calc(100% - ${2*state.fullPadding}px)`,
                    width: state.mobileOpen ? `calc(100% - ${2*state.mobilePadding}px)` : `calc(100% - ${2*state.fullPadding}px)`,
                }}
            >
                <FirstPage 
                    mouseX={props.mouseX}
                    mouseY={props.mouseY}
                    scroll={pageScroll}
                />

                <AboutPage 
                    setArtist={props.setArtist}
                />
                <MeetUsPage 
                    setArtist={props.setArtist}
                />

                <ContactPage />

                <MatchGame />


            </ContentContainer>
        </Container>
    );

    function scrollEvent(e: any) {

        let scrollOff = e.target.scrollTop
        setPageScroll(scrollOff)
        
    }
}

export default Content;
