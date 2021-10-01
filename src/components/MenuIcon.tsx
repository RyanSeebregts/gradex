import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import $ from 'jquery'
import './MenuIcon.css'
const Container = styled.div`
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
`

interface propTypes {
    open: boolean
    color: string
    mobileOpen: boolean
}
function MenuIcon(props: propTypes) {

    const normalHeight = 3
    const mobileHeight = 2

    const [height, setHeight] = useState(3)

    useEffect(() => {
        animateOpen()
    }, [props.open])

    useEffect(() => {
        if(props.mobileOpen)
            setHeight(mobileHeight)
        else
            setHeight(normalHeight)

    }, [props.mobileOpen])


    return (
        <Container
        >
            <div style={{height: '100%', width: '100%', position: 'relative',}}>
                {/*leftTopRotate topDown leftIn */}
                <div className="barTopLeft" style={{background: props.color, height: `${height}px`}}></div>
                {/* rightTopRotate topDown rightIn*/}
                <div className="barTopRight" style={{background: props.color, height: `${height}px`}}></div>
                {/* left opacityNone*/}
                <div className="barMiddelLeft" style={{background: props.color, height: `${height}px`, top: `calc(50% - ${height/2}px)`}}></div>
                {/* right opacityNone*/}
                <div className="barMiddelRight" style={{background: props.color,height: `${height}px`, top: `calc(50% - ${height/2}px)`}}></div>
                {/* rightTopRotate bottomUp leftIn*/}
                <div className="barBottomLeft" style={{background: props.color, height: `${height}px`}}></div>
                {/* leftTopRotate bottomUp rightIn*/}
                <div className="barBottomRight" style={{background: props.color, height: `${height}px`}}></div>
            </div>

        </Container>
    );

    function animateOpen() {
        if(props.open) {
            $('.barMiddelLeft').addClass('left');
            $('.barMiddelRight').addClass('right');
            $('.barMiddelLeft').addClass('opacityNone');
            $('.barMiddelRight').addClass('opacityNone');
            $('.barTopLeft').addClass('leftTopRotate');
            $('.barTopRight').addClass('rightTopRotate');
            $('.barBottomLeft').addClass('rightTopRotate');
            $('.barBottomRight').addClass('leftTopRotate');
            $('.barTopLeft').addClass('topDown');
            $('.barTopRight').addClass('topDown');
            $('.barBottomLeft').addClass('bottomUp');
            $('.barBottomRight').addClass('bottomUp');
            
            $('.barTopLeft').addClass('leftIn');
            $('.barTopRight').addClass('rightIn');
            $('.barBottomLeft').addClass('leftIn');
            $('.barBottomRight').addClass('rightIn');
        }
        else {
            $('.barMiddelLeft').removeClass('left');
            $('.barMiddelRight').removeClass('right');
            $('.barMiddelLeft').removeClass('opacityNone');
            $('.barMiddelRight').removeClass('opacityNone');
            $('.barTopLeft').removeClass('leftTopRotate');
            $('.barTopRight').removeClass('rightTopRotate');
            $('.barBottomLeft').removeClass('rightTopRotate');
            $('.barBottomRight').removeClass('leftTopRotate');
            $('.barTopLeft').removeClass('topDown');
            $('.barTopRight').removeClass('topDown');
            $('.barBottomLeft').removeClass('bottomUp');
            $('.barBottomRight').removeClass('bottomUp');
            
            $('.barTopLeft').removeClass('leftIn');
            $('.barTopRight').removeClass('rightIn');
            $('.barBottomLeft').removeClass('leftIn');
            $('.barBottomRight').removeClass('rightIn');
        }
    }
}

export default MenuIcon;