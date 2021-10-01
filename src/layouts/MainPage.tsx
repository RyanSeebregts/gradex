import React, { useEffect, useRef, useState, useContext } from 'react';
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import { mainStore, MainStateProvider } from '../store/MainStore'
import styles from '../constants'
import Padding from './Padding'




import MenuIcon from '../components/MenuIcon';
import TransitionContainer from '../components/TransitionContainer';
import ArtistsContainer  from '../components/ArtistsContainer'

import { MdEmail, MdCancel, MdCheck, MdKeyboardArrowDown, MdKeyboardArrowUp, MdSearch, MdColorLens, MdFitnessCenter, MdLocalActivity, MdLocalBar, MdLocalCafe, MdLocalMall, MdRestaurantMenu, MdShoppingCart } from 'react-icons/md';
import Content from './Content';
import MenuPage from './MenuPage';

const Container = styled.div`
    top: 0px;
    left: 0px;
    position: absolutew;
    height: 100%;
    width: 100%;
    background: ${styles.background};
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
`


const PaddingElements = styled.div`
    position: fixed;
    z-index: 12;
    left: 0px;
    background: white;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const VerticalPaddingElements = styled.div`
    position: fixed;
    height: 100%;
    z-index: 10;
    background: white;
    transition: all 0.3s ease;
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



//    scroll-snap-type: y mandatory;

const height  = window.innerHeight
const width  = window.innerWidth

interface propTypes {

}

interface ContentHeightTypes {
    name: string
    height: number
}

function MainPage(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const [contentHeights, setContentHeights] = useState<ContentHeightTypes[]>()

    let padding = 90

    if(state.mobileOpen) 
        padding = 60
    const [menuTop, setMenuTop] = useState(height - padding)

    const [animatingMenu, setAnimatingMenu] = useState(false)

    let timer:any = null


    useEffect(() => {

        document.addEventListener('mousemove', function(e: any){
            let newX = (e.clientX/width) * 100
            let newY = (e.clientY/height) * 100

            if(Math.abs(mouseX - newX) > 1 )    {
                setMouseX( newX)
            }
            if(Math.abs(mouseY - newY) > 1 )    {
                setMouseY( newY)
            }
        }, false)

        return () => {
            clearTimeout(timer)
        }
    
    }, [])

    return (
        <Container
            id="container"
        >
            

             

            <Content 
                mouseX={mouseX}
                mouseY={mouseY}
                setArtist={setArtist}
            />
            <ArtistsContainer 
                setArtist={setArtist}
            />

            <MenuPage 
            /> 
            
            <Padding 
                menuSetter={menuSetter}
                setArtist={setArtist}
            />

        </Container>
    );

    function saveHeight(height: number, name: string) {
        let newBlank:any = []
        let newHeights = newBlank.concat(contentHeights)
        let index = -1
        newHeights.forEach((item: any, key:number) => {
            if(item.name = name) {
                index = key
            }
        })
        if(index > -1) {
            newHeights[index].height = height
        }
        else {
            let newHeight = {name, height}
            newHeights.push(newHeight)
            setContentHeights(newHeights)
        }
        
    }
    

    

    function goTo(page: string) {
        /*let newBlank:any = []
        let heights = newBlank.concat(contentHeights)
        let height = =
        switch(page) {
            case "":
                height = 1
                break
            case "meet":
                height = 2
                break
            case "gallery":
                height = 3
                break
            case "events":
                height = 4
                break
            case "contact":
                height = 5
                break
        }

        setScroll(multiplier * height)
        menuSetter(false)
        */
    }

    function setArtist(artist: string, artistType: string) {
        dispatch({
            type: 'setArtist',
            artistOpen: artist,
            artistType: artistType
        })
    }

    function menuSetter(val: boolean) {
        setMenuOpen(val)
        timer = setTimeout(() => setAnimatingMenu(val), 4)
    }

    function setScroll(top: number) {
        let scroller = document.getElementById("container")
        if(scroller) 
            scroller.scrollTop = top
    }

    function setMenuOpen(val: boolean) {
        dispatch({
            type: 'setMenu',
            menuOpen: val
        })
    }
}

export default MainPage;