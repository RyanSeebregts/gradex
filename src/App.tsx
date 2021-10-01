import React, {useEffect, useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { mainStore, MainStateProvider } from './store/MainStore'
import history from './history'
import { Router } from 'react-router-dom'

import MainPage from './layouts/MainPage';
import artists from './info/artists'

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {

  return (
    <MainStateProvider>

        <Router history={history}>

          <AppWrapper />
        </Router>

    </MainStateProvider >
  );
}

export default App;


function AppWrapper() {
  
  const {state, dispatch} = useContext(mainStore)

  useEffect( () => {


    const resizeFunction = () => {
      // change width from the state object
      if (window.innerWidth >= 960) {
        dispatch({type: 'setMobileOpen', mobileOpen: false});
        console.log('mobile close')

      }
      else {
        dispatch({type: 'setMobileOpen', mobileOpen: true});
        console.log('mobile open')

      }

      let newHeight = window.innerHeight
      if(state.height !== newHeight) {
        dispatch({
          type: 'setHeight',
          height: newHeight
        })
      }
    };

    resizeFunction()

    window.addEventListener('resize', resizeFunction);

    function setBrowser(type: any) {
      dispatch({
        type: 'setBrowser',
        browser: type
      })

    }

    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
      setBrowser('op')
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
      setBrowser('chr')
    }
    else if(navigator.userAgent.indexOf("Safari") != -1) {
      setBrowser('saf')
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
      setBrowser('fir')
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 )) {
      setBrowser('ie')
    }  

    let newJewelry:object[] = []
    let newFine:object[] = []
    let newVisual:object[] = []

    artists.forEach((prop:any, index:number) => {
      if(prop.type === 'jewelry') {
        newJewelry.push(prop)
      }

      else if (prop.type === 'fine') {
        newFine.push(prop)
      }

      else if (prop.type === 'visual') {
        newVisual.push(prop)
      }
    })

    console.log(newJewelry)

    dispatch({
      type: 'setArtists',
      jewelryArtists: newJewelry,
      fineArtists: newFine,
      visualArtists: newVisual
    })

    return () => {
      window.removeEventListener("resize", resizeFunction);
    }


  }, [])

  return (
    <Container>
      <MainPage 

      />
    </Container>
  );
}

