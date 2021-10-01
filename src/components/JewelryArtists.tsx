import React, { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components'
import styles from '../constants';
import { mainStore } from '../store/MainStore';
import Grid from './Grid';

const Container = styled.div`
    height: 100%;
    width: 100%;
    top: 0px;
    background: ${styles.background};
    overflow-y: auto;
    flex-shrink: 0;
`

const Heading = styled.div`
    height: 250px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    letter-spacing:5px;
    font-weight: bold;
    color: ${styles.black}
`

const GridStart = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    letter-spacing:3px;
    font-weight: bold;
    color: ${styles.black}
`


interface propTypes {

}
function JewelryArtists(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)

    return (
        <Container
            style={{
    
            }}
        >
            <Heading>
                Jewelry Design
            </Heading>
           
            <Grid
                customStart={
                    <GridStart>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        
                    </GridStart>
                }
                columns={state.mobileOpen ? 2 : 4}
                elements={
                    state.jewelryArtists
                }
            />
           

        </Container>
    );

}

export default JewelryArtists;