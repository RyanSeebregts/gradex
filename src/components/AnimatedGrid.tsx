import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    top: 0px;
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: space-evenly;
    align-content: center;
    grid-row-gap: 20px;
`

const GridItem = styled.div`
    width: 100%;
    height: 100%;
`

interface propTypes {
    open: boolean
    elements:any
    columns: number
    columnWidth: string
    rowHeight: string
    rows: number
    delay?: number
}
function AnimatedGrid(props: propTypes) {

    const [gridOpen, setGridOpen] = useState(false)

    useEffect(() => {
        setGridOpen(props.open)
    }, [props.open])


    return (
        <Container
            style={{
                gridTemplateColumns: `repeat(${props.columns}, ${props.columnWidth})`,
                gridTemplateRows: `repeat(${props.rows}, ${props.rowHeight})`
            }}
        >
            {
                
                props.elements.map((prop: any, key: number) =>
                    <GridItem 
                        style={{
                            
                            opacity: gridOpen ? 1: 0,
                            transition: props.open ? 'all 0.5s ease' : '0s',
                            transitionDelay: props.open ? `${key * (props.delay ||100) }ms` : '0s'
                        }}
                    >
                        {
                            prop
                        }
                    </GridItem>
                )
                
            } 

            
        </Container>
    );
}

export default AnimatedGrid;