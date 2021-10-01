import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components'
import AnimatedGrid from '../components/AnimatedGrid';
import { mainStore } from '../store/MainStore';
import styles from '../constants';
import CustomButton from '../components/CustomButton';

const Container = styled.div`
    width: 100%;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 30px;
`

const HeadingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
`

const ButtonsContainer = styled.div`
    width: 100%;
    height: 100px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
`

const ButtonHolder = styled.div`
    position: relative;
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
`

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${styles.pink};
    font-size: 90px;
    font-weight: bold;
`


interface propTypes {
    setArtist: any
}
function AboutPage(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)


    return (
        <Container
            style={{
                height: state.mobileOpen ? 'auto' : state.height + 4*state.fullPadding,
            }}
        >
            <div style={{height: '100px'}} />

            <HeadingContainer>

                <div style={{display: 'flex', flexShrink: 0,  justifyContent: 'center', width: '40%'}}>
                    <div>
                        <div style={{color: styles.headingColor, fontWeight: 'bold', fontSize: '80px'}}>what is</div>
                        <div style={{color: styles.pink, fontWeight: 'bold', fontSize: '80px'}}>GradeX</div>
                    </div>
                </div>

                <div style={{display: 'flex', flexGrow: 0, justifyContent: 'center', width: '60%'}}>
                    <div style={{width: 'calc(100% - 100px)', color: styles.headingColor, fontSize: '20px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et

                    </div>

                </div>
            </HeadingContainer>

            <ButtonsContainer>
                <ButtonHolder>
                    <CustomButton clicked={() => props.setArtist('', 'jewelry')}>JEWELLRY DESIGN</CustomButton>
                </ButtonHolder>

                <ButtonHolder>
                    <CustomButton clicked={() => props.setArtist('', 'fine')}>FINE ARTS</CustomButton>
                </ButtonHolder>

                <ButtonHolder>
                    <CustomButton clicked={() => props.setArtist('', 'visual')}>VISUAL COMMUNICATION DESIGN</CustomButton>
                </ButtonHolder>

            </ButtonsContainer>

            <FooterContainer
                style={{
                    flexGrow: state.mobileOpen ? 0 : 1,
                    height: state.mobileOpen ? '100px' : 'auto',

                }}
            >
                We push boundaries
            </FooterContainer>
            
        </Container>
    );
}

export default AboutPage;