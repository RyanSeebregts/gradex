import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import AnimatedGrid from '../components/AnimatedGrid';
const Container = styled.div`
    height: 100%;
    width: 100%;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`

interface propTypes {
    open: boolean
}
function TestPage(props: propTypes) {


    return (
        <Container>

            
            
        </Container>
    );
}

export default TestPage;