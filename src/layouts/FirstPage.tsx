import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components'
import { mainStore, MainStateProvider } from '../store/MainStore'
import MenuIcon from '../components/MenuIcon';
import Eyes from '../components/Eyes';
import styles from '../constants'

const Container = styled.div`
    width: 100%;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    background: #ffffff;
    &:before {
        content: "";
        position: absolute;
        top: 0px;
        height: 100%;
        width: 100%;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.76;
        background-image: url(https://gradex2021.s3.af-south-1.amazonaws.com/art/slideshowtemp.jpeg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    };
`

const TimerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: ${styles.headingColor};
`

const TimerComponent = styled.div`
    height: 100%;
    width: 25%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TimerNumber = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 223;
`

const TimerText = styled.div`
    height: 50px;
    font-size: 20px;
    font-weight: normal;
`


interface propTypes {
    mouseY: any
    mouseX: any
    scroll: number
}

const date = new Date('1 December 2021').getTime()

function FirstPage(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)

    const [currSec, setCurrSec] = useState('0')
    const [currMin, setCurrMin] = useState('0')
    const [currHours, setCurrHours] = useState('0')
    const [currDay, setCurrDay] = useState('0')

    useEffect(() => {
        let x = setInterval(function() {
            let now = new Date().getTime()
            let distance = date - now;

            // Time calculations for days, hours, minutes and seconds
            let days:any = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours:any = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes:any = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds:any = Math.floor((distance % (1000 * 60)) / 1000);

            setCurrSec(seconds)
            setCurrMin(minutes)
            setCurrHours(hours)
            setCurrDay(days)

        }, 1000)
    }, [])

    return (
        <Container
            style={{
                height: '100%',
            }}
        >


            <Content
                style={{
                    fontSize: state.mobileOpen ? '40px' : '120px',
                }}
            >



                <TimerContainer
                    style={{
                        width: state.mobileOpen ? '90%' : '67%',
                    }}
                >
                    <TimerComponent
                        style={{marginLeft: '0px'}}
                    >
                        <TimerNumber>
                            {
                                currDay
                            }
                        </TimerNumber>
                        
                        <TimerText>
                            DAYS
                        </TimerText>
                    </TimerComponent>

                    <TimerComponent>
                        <TimerNumber>
                            {
                                currHours
                            }
                        </TimerNumber>
                        <TimerText>
                            HOURS
                        </TimerText>
                    </TimerComponent>

                    <TimerComponent>
                        <TimerNumber>
                            {
                                currMin
                            }
                        </TimerNumber>
                        <TimerText>
                            MINS
                        </TimerText>
                    </TimerComponent>

                    <TimerComponent>
                        <TimerNumber>
                            {
                                currSec
                            }
                        </TimerNumber>
                        <TimerText>
                            SEC
                        </TimerText>
                    </TimerComponent>
                </TimerContainer>

                <div
                    style={{
                        position: 'absolute',
                        bottom: '-50px'
                    }}
                >
                    <Eyes 
                        mouseX={props.mouseX}
                        mouseY={props.mouseY}
                        height={state.height}
                        scroll={props.scroll}
                        browser={state.browser}
                        mobileOpen={state.mobileOpen}
                    />
                </div>

                
                {/*
                <div>STELLENBOSCH</div>
                <div>GRADEX '21</div>
                */}
            </Content>

        </Container>
    );
}

export default FirstPage;