import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import MenuIcon from './MenuIcon';
import TransitionContainer from './TransitionContainer';
const Container = styled.div`
    height: 80px;
    width: 100%;
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: flex-end;
`

const ButtonContainer = styled.div`
    height: 100%;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const IconContainer = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

const MenuContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    background: black;
    top: 0px;
    left: 0px;
`

const MenuItemsContainer = styled.div`
    height: calc(100% - 200px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const MenuItem = styled.div`
    color: white;
    height: calc(100% / 5);
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    transition: all 0.2s ease;
`

const height = window.innerHeight

interface propTypes {
    setScroll: any
}

function NavBar(props: propTypes) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [animatingMenu, setAnimatingMenu] = useState(false)

    let timer:any = null


    useEffect(() => {
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <Container>
            <ButtonContainer>
                <IconContainer>
                </IconContainer>
            </ButtonContainer>

            <TransitionContainer
                open={menuOpen}
                length={0.3}
                zIndex={9}
            >
                <MenuContainer>
                    <MenuItemsContainer>
                        <MenuItem onClick={() => goTo('about')} style={{transitionDelay: '200ms', marginLeft: animatingMenu ? '0px' : '200px', opacity: animatingMenu ? 1 : 0,}}>ABOUT US</MenuItem>
                        <MenuItem onClick={() => goTo('meet')} style={{transitionDelay: '150ms', marginLeft: animatingMenu ? '0px' : '200px', opacity: animatingMenu ? 1 : 0,}}>MEET US</MenuItem>
                        <MenuItem onClick={() => goTo('gallery')} style={{transitionDelay: '100ms', marginLeft: animatingMenu ? '0px' : '200px', opacity: animatingMenu ? 1 : 0,}}>GALLERY</MenuItem>
                        <MenuItem onClick={() => goTo('events')} style={{transitionDelay: '50ms', marginLeft: animatingMenu ? '0px' : '200px', opacity: animatingMenu ? 1 : 0,}}>EVENTS</MenuItem>
                        <MenuItem onClick={() => goTo('contact')} style={{transitionDelay: '0s', marginLeft: animatingMenu ? '0px' : '200px', opacity: animatingMenu ? 1 : 0,}}>CONTACT</MenuItem>

                    </MenuItemsContainer>
                </MenuContainer>
            </TransitionContainer>
            
            

        </Container>
    );

    function goTo(page: string) {
        let multiplier = 0;

        switch(page) {
            case "about":
                multiplier = 1
                break
            case "meet":
                multiplier = 2
                break
            case "gallery":
                multiplier = 3
                break
            case "events":
                multiplier = 4
                break
            case "contact":
                multiplier = 5
                break
        }

        props.setScroll(multiplier * height)
        menuSetter(false)
    }

    function menuSetter(val: boolean) {
        setMenuOpen(val)
        timer = setTimeout(() => setAnimatingMenu(val), 4)

    }
}

export default NavBar;