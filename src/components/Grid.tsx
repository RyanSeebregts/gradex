import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import styles from '../constants';
import test1 from '../resources/test1.jpg'
const Container = styled.div`
    top: 0px;
    width: 100%;
    flex-shrink: 0;
    display: grid;
    align-content: center;
`

const GridItemCover = styled.div`
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        background: ${styles.red};
        opacity: 0.7;
        z-index: 0;
    }
`

const CoverHeading = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: calc(50% - 11.5px);
    margin-bottom: 10px;
    font-size: 23px;
    font-weight: bold;
    color: white;
    z-index: 2;
`

const CoverContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: calc(50% - 11.5px);
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    z-index: 2;
`

const GridItem = styled.div`
    width: 100%;
    flex-shrink: 0;
    position: relative;
    aspect-ratio: 1;
    padding: 0px;
    &:hover ${GridItemCover} {
        opacity: 1;
    }
`


const GridPhoto = styled.img`
    height: 100%;
    display: flex;
    width: 100%;
    top: 0px;
    background: white;
    object-fit: cover;
    border: 0px;
    overflow: hidden;
`

interface propTypes {
    elements:any
    columns: number
    clicked?: any
    customStart?: any
}
function Grid(props: propTypes) {

    useEffect(() => {
        console.log(props.elements)
    }, [])

    return (
        <Container
            style={{
                gridTemplateColumns: `repeat(${props.columns}, calc(100% / ${props.columns}) )`,
            }}
        >
            {
                props.customStart &&
                    <GridItem 
                        style={{
                            gridColumnStart: 1,
                            gridColumnEnd: 3,
                            aspectRatio: '2/1'
                        }}
                    >

                        {props.customStart}
                    </GridItem>
            }
            {
                
                props.elements.map((prop: any, key: number) =>
                    <GridItem 
                        style={{}}
                        onClick={props.clicked ? () => props.clicked(key) : undefined}
                    >
                        <GridItemCover>
                            <CoverHeading>Wicked Problem</CoverHeading>
                            <div style={{width: 'calc(100% - 50px)', zIndex: 2, height: '3px', background: 'white',}}></div>
                            <CoverContent>
                                Jane Doe
                                <div style={{fontWeight: 'normal', fontSize: '15px', marginTop: '5px'}}>VCD</div>
                            </CoverContent>

                        </GridItemCover>
                        {
                            <GridPhoto  src={prop.photo}/>
                        }
                    </GridItem>
                )
                
            } 

            
        </Container>
    );

    function getPhoto(url: string) {
        const pic = require(url)
        return pic
    }
}

export default Grid;