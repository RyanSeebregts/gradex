import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components'
import { mainStore, MainStateProvider } from '../store/MainStore'
import styles from '../constants'
import SlideContainer from './SlideContainer';
import JewelryArtists from './JewelryArtists';
import VisualArtists from './VisualArtists';
import FineArtists from './FineArtists';

const Container = styled.div`
    position: fixed;
    pointer-events: none;
    z-index: 12;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
`

const Content = styled.div`
    pointer-events: auto;
    position: relative;
`

const SidePads = styled.div`
    position: fixed;
    top: 0px;
    height: 100%;
    display: flex;
    justify-content: center;
`

const SideButtons = styled.div`
    width: 100%;
    padding: 30px 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

`



interface propTypes {
    setArtist: any
}


function ArtistContainer(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)
    const [open, setOpen] = useState(false)

    const [artistTypeIndex, setArtistTypeIndex] = useState(0)


    useEffect(() => {
        if(state.artistType !== '') {
            console.log(state.artistType)
            if(state.artistType === 'jewelry')
                setArtistTypeIndex(0)
            if(state.artistType === 'fine')
                setArtistTypeIndex(1)
            if(state.artistType === 'visual')
                setArtistTypeIndex(2)
        }
        if(state.artistType === '' && state.artistOpen === '')
            setOpen(false)

        else
            setOpen(true)

    }, [state.artistType, state.artistOpen])

    return (
        <Container
            style={{
                top: open ? '0px' : '100%',
            }}
        >

            <Content
                style={{
                    position: 'relative',
                    height: state.mobileOpen ? `calc(100% - ${2*state.mobilePadding}px)` : `calc(100% - ${2*state.fullPadding}px)`,
                    width: state.mobileOpen ? `calc(100% - ${2 * state.mobilePadding}px)` : `calc(100% - ${2*state.fullPadding}px)`,
                }}
            >
                <SlideContainer
                    slides={[<JewelryArtists />, <FineArtists />, <VisualArtists />]}
                    open={open}
                    index={artistTypeIndex}
                />
            </Content>
            
            
        </Container>
    );
}

export default ArtistContainer;