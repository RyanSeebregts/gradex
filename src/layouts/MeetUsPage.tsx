import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components'
import { mainStore, MainStateProvider } from '../store/MainStore'
import Grid from '../components/Grid';

import test1 from '../resources/test1.jpg'
import test2 from '../resources/test2.jpg'
import test3 from '../resources/test3.jpg'
import test4 from '../resources/test4.jpg'
import test5 from '../resources/test5.jpg'
import test6 from '../resources/test6.jpg'
import test7 from '../resources/test7.jpg'
import test8 from '../resources/test8.jpg'

const Container = styled.div`
    width: 100%;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`

const InfoContainerContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

interface propTypes {
    setArtist: any
}
function AboutPage(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)


    return (
        <Container
            style={{
                height: 'auto'
            }}
        >


            
            <InfoContainerContainer
                style={{
                    width: '100%',
                }}
            >
                <Grid 
                    columns={state.mobileOpen ? 2 : 4}
                    clicked={gridClicked}
                    elements={[
                        {
                            photo: 'https://gradex2021.s3.af-south-1.amazonaws.com/art/test1.jpg'
                        },
                        {
                            photo: 'https://gradex2021.s3.af-south-1.amazonaws.com/art/test2.jpg'
                        },
                        {
                            photo: 'https://gradex2021.s3.af-south-1.amazonaws.com/art/test3.jpg'
                        },
                        {
                            photo: 'https://gradex2021.s3.af-south-1.amazonaws.com/art/test4.jpg'
                        },
                        {
                            photo: 'https://gradex2021.s3.af-south-1.amazonaws.com/art/test5.jpg'
                        },
                        {
                            photo: 'https://gradex2021.s3.af-south-1.amazonaws.com/art/test6.jpg'
                        },
                        {
                            photo: 'https://gradex2021.s3.af-south-1.amazonaws.com/art/test7.jpg'
                        },
                        {
                            photo: 'https://gradex2021.s3.af-south-1.amazonaws.com/art/test8.jpg'
                        }
                    ]}
                />
            </InfoContainerContainer>
            
        </Container>
    );

    function gridClicked(key: any) {
        props.setArtist('an artist', '')
    }
}

export default AboutPage;