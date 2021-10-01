import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components'
import AnimatedGrid from '../components/AnimatedGrid';
import { mainStore } from '../store/MainStore';
import styles from '../constants';

const Container = styled.div`
    position: relative;
    height: 20px;
    transition: all 0.3s ease;
    display: inline-block;
    flex-grow: 0;
    padding: 7px 12px;
    background: ${styles.lightgrey};
    color: ${styles.lightText}; 
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    &:hover {
        padding: 9px 14px;
        background: ${styles.pink};
        color: white 
    }
`

interface propTypes {
    children: any
    clicked: any
}
function CustomButton(props: propTypes) {


    return (
        <Container
            onClick={props.clicked}
        >
            {
                props.children
            }
        </Container>
    );
}

export default CustomButton;