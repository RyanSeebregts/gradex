import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components'
import { mainStore, MainStateProvider } from '../store/MainStore'
import styles from '../constants'

const Container = styled.div`
    pointer-events: none;

    position: fixed;
    z-index: 15;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
`

const Content = styled.div`
    position: relative;
    background: black;
    pointer-events: auto;


`





interface propTypes {
}


function MenuPage(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(state.menuOpen)
    }, [state.menuOpen])

    return (
        <Container
            style={{
                bottom: open ? '0px' : '100%',
            }}
        >

            <Content
                style={{
                    height: state.mobileOpen ? `calc(100% - ${2*state.mobilePadding}px)` : `calc(100% - ${2*state.fullPadding}px)`,
                    width: state.mobileOpen ? `calc(100% - ${2 * state.mobilePadding}px)` : `calc(100% - ${2*state.fullPadding}px)`,
                }}
            >
            </Content>
            
        </Container>
    );
}

export default MenuPage;