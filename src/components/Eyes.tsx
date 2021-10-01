import { lchown } from 'fs';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import styles from '../constants';

const Container = styled.div`
    display: flex;
    align-items: center;
`

const EyeContainer = styled.div`
    position: relative;
    height: 100%;
    width: calc(100% / 5);
    background: ${styles.background};
    overflow: hidden;

`

const EyeBalls = styled.div`
    position: absolute;
    background: black;
`

const EyeContainerPadding = styled.div`
    width: calc(100% / 5);
    background: transparent;
`

interface propTypes {
    mouseX: number
    mouseY: number
    height: number
    scroll: number
    browser: string
    mobileOpen: boolean
}
function Eyes(props: propTypes) {

    const ContainerHeight = 100
    const ContainerWidth = 500

    const EyeBallSize = ContainerHeight * 2/3

    const EyeContainerRef = useRef<HTMLDivElement>(null)

    const [containerMiddleX, setContainerMiddleX] = useState(0)
    const [containerMiddleY, setContainerMiddleY] = useState(0)

    const [eyesX, setEyesX] = useState(0)
    const [eyesY, setEyesY] = useState(0)
    const [squint, setSquint] = useState(0)
    useEffect(() => {
        let eyeRef = EyeContainerRef.current
        if(eyeRef) {
            let rect = eyeRef.getBoundingClientRect()
            setContainerMiddleX(rect.x + (ContainerHeight/2) )
            setContainerMiddleY(( rect.y / props.height * 100 ) / 2)

        }
    }, [])

    useEffect(() => {
        /*
        let topY = containerMiddleY - ( ContainerHeight/(4*2) )
        let leftX = containerMiddleX

        let top = 0


        let dif = topY - props.mouseY
        if(dif < 0) {
            top = dif * -1
            if(top > (ContainerHeight/4 - ContainerHeight/10)) 
                top = ContainerHeight/4 - ContainerHeight/10
        }


        setEyesX( top)

        let left = 0


        dif = leftX - props.mouseX

        if(dif < 0) {
            left = dif * -1
            if(left > (ContainerHeight/5 - ContainerHeight/10)) 
            left = ContainerHeight/5 - ContainerHeight/10
        }


        setEyesY( left )

        let ang = Math.tan(top/left)
        setEyeAngle(ang)

        */

        let scrollPerc = props.scroll / props.height * 100
        let mouseY = props.mouseY + scrollPerc - containerMiddleY
        if( props.mouseX > 90 ) 
            setEyesX( 90 )
        

        else if(props.mouseX < 10)
            setEyesX( 10 )
        

        else 
            setEyesX( props.mouseX )
        

        if( mouseY > 90) 
            setEyesY(90)

        else if(mouseY < 10)
            setEyesY( 10 )

        else {
            setEyesY( mouseY )
        }

        let weight = 0
        let x = Math.abs(props.mouseX - 50)
        let y = Math.abs(props.mouseY  + scrollPerc - 90)

        if(!props.mobileOpen) {
            y = y / 2
        }

        let dist = Math.sqrt( ( x * x ) + ( y * y ) )

        if(dist < 10)
            weight += 10 - dist

        setSquint(weight)
        

    }, [props.mouseX, props.mouseY])

    return (
        <Container
            style={{
                height: ContainerHeight,
                width: ContainerWidth
            }}
            ref={EyeContainerRef}
        >
            <EyeContainerPadding />

            <EyeContainer
                style={{
                    borderRadius: `${ContainerWidth/2}px`
                }}
            >
                <EyeBalls 
                    style={{
                        top: props.mobileOpen ? `calc(50% - ${EyeBallSize/2}px)` : `calc(${eyesY}% - ${EyeBallSize/2}px)`,
                        left: props.mobileOpen ? `calc(50% - ${EyeBallSize/2}px)` : `calc(${eyesX}% - ${EyeBallSize * 1/2}px + ${3 * squint}px)`,
                        height: `${EyeBallSize}px`,
                        width: `${EyeBallSize}px`,
                        borderRadius: `${EyeBallSize/2}px`,
                        transition: props.browser === 'chr' ? 'all 0.1s ease' : 'none'
                    }}
                />
            </EyeContainer>


            <EyeContainerPadding />

            <EyeContainer
                style={{
                    borderRadius: `${ContainerWidth/2}px`
                }}
            >
                <EyeBalls 
                    style={{
                        top: props.mobileOpen ? `calc(50% - ${EyeBallSize/2}px)` : `calc(${eyesY}% - ${EyeBallSize/2}px)`,
                        left: props.mobileOpen ? `calc(50% - ${EyeBallSize/2}px)` : `calc(${eyesX}% - ${EyeBallSize * 1/2}px - ${3 * squint}px)`,
                        height: `${EyeBallSize}px`,
                        width: `${EyeBallSize}px`,
                        borderRadius: `${EyeBallSize/2}px`,
                        transition: props.browser === 'chr' ? 'all 0.1s ease' : 'none'
                    }}
                />
            </EyeContainer>

            <EyeContainerPadding />

        </Container>
    );
}

export default Eyes;