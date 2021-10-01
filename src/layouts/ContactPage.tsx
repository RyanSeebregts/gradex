import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components'
import { mainStore } from '../store/MainStore';

const Container = styled.div`
    width: 100%;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`

interface propTypes {

}
function ContactPage(props: propTypes) {
    const {state, dispatch} = useContext(mainStore)


    return (
        <Container
            style={{
                height: state.height
            }}
        >
            CONTACT TEMPLATE

        </Container>
    );
}

export default ContactPage;