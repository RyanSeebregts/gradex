import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import elem1 from '../elements/elem1.svg'
import elem2 from '../elements/elem2.svg'
import elem3 from '../elements/elem3.svg'
import elem4 from '../elements/elem4.svg'
import elem5 from '../elements/elem5.svg'
import elem6 from '../elements/elem6.svg'
import elem7 from '../elements/elem7.svg'
import elem8 from '../elements/elem8.svg'
import elem9 from '../elements/elem9.svg'
import elem10 from '../elements/elem10.svg'
import elem11 from '../elements/elem11.svg'
import elem12 from '../elements/elem12.svg'
import elem13 from '../elements/elem13.svg'
import elem14 from '../elements/elem14.svg'
import elem15 from '../elements/elem15.svg'
import styles from '../constants';

const Container = styled.div`
    width: 100%;
    aspect-ratio: 5/3;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
`

const Box = styled.div`
    width: calc(100% / 5);
    height: calc(100% / 3 );
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`

interface propTypes {
}
function MatchGame(props: propTypes) {
    const [elems, setElems] = useState<any[]>([])
    const [found, setFound] = useState<number[]>([])

    const [shown, setShown] = useState<number>(-1)
    const [secondShown, setSecondShown] = useState<number>(-1)

    let timeout:any = null

    useEffect(() => {
        let newElems:any[] = []
        let allElems = [
            {name: "elem1", element: elem1},
            {name: "elem2", element: elem2},
            {name: "elem3", element: elem3},
            {name: "elem4", element: elem4},
            //{name: "elem5", element: elem5},
            //{name: "elem6", element: elem6},
            //{name: "elem7", element: elem7},
            //{name: "elem8", element: elem8},
            //{name: "elem9", element: elem9},
            /*{name: "elem10", element: elem10},
            {name: "elem11", element: elem11},
            {name: "elem12", element: elem12},
            {name: "elem13", element: elem13},
            {name: "elem14", element: elem14},
            {name: "elem15", element: elem15},*/
            {name: "elem1", element: elem1},
            {name: "elem2", element: elem2},
            {name: "elem3", element: elem3},
            {name: "elem4", element: elem4},
            //{name: "elem5", element: elem5},
            //{name: "elem6", element: elem6},
            //{name: "elem7", element: elem7},
            //{name: "elem8", element: elem8},
            //{name: "elem9", element: elem9},
            /*{name: "elem10", element: elem10},
            {name: "elem11", element: elem11},
            {name: "elem12", element: elem12},
            {name: "elem13", element: elem13},
            {name: "elem14", element: elem14},
            {name: "elem15", element: elem15}*/
        ]
        for(let i = 0; i < 19; i++) {
            let newEle = {}

            if(i === 5 || i === 6 || i === 11 || i === 12) 
                newEle = {color: styles.pink, hidden: true, elem: false}

            else if(i % 2 === 1 )
                newEle = {color: styles.pink, hidden: false, elem: false}

            else {
                let ran = Math.floor(Math.random() * allElems.length )
                console.log(i)
                console.log("ran num: "+ran)
                let el = allElems[ran]
                console.log(el)
                allElems.splice(ran, 1)
                newEle = {
                    color: 'white', 
                    hidden: false,
                    element: el.element,
                    name: el.name,
                    elem: true
                }
            }
            newElems.push(newEle)
            console.log(i)
        }

        setElems(newElems)

        return( () => {
            clearTimeout(timeout)
        })
    }, [])

    return (
        <Container>
            {
                elems.map((prop, key) => 
                    <Box
                        onClick={prop.elem ? () => clickBlock(key) : () => {} }
                        style={{background: prop.color, display: prop.hidden ? 'none' : 'inherit'}}
                    >
                        {
                            prop.elem &&
                                <img style={{height: '50%', opacity: shown === key || secondShown === key || found.indexOf(key) !== -1 ? 1 : 0}} src={prop.element} />
                        }
                    </Box>
                )
            }
            
            
        </Container>
    );

    function clickBlock(elem:number) {
        if(shown === -1) {
            setShown(elem)
        }

        else if(elem !== shown && secondShown === -1) {
            setSecondShown(elem)

            let clickedElem = elems[elem].name
            let shownElem = elems[shown].name
            if(clickedElem === shownElem) {
                let newFound: number[] = []
                newFound = newFound.concat(found)

                newFound.push(elem)
                newFound.push(shown)

                setFound( newFound )
                closeShown()
            }

            else {
                timeout = setTimeout(() => closeShown(), 1000)
            }

        }
    }

    function closeShown() {
        setShown(-1)
        setSecondShown(-1)
    }
}

export default MatchGame;