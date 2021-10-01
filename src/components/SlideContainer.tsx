import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    top: 0px;
`

const Slide = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
`

interface propTypes {
    slides: Array<any>
    index: number
    open: boolean
}
function SlideContainer(props: propTypes) {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(props.index)
        console.log(index)

        let timer1:any = null
        
        timer1 = setTimeout(() => setOpen(props.open), 4)

      
        return () => {
            clearTimeout(timer1)
        }

    }, [props.open, props.index])

    return (
        <Container
            style={{
    
            }}
        >
            {
                props.slides.map((prop, key) => 
                    <Slide
                        style={{
                            transition: open && (index === key || (index - 1) === key || (index === 0 && key === props.slides.length-1) ) ? 'all 0.5s ease' : 'none',
                            left: index === key ? '0%' :  (index - 1) === key || (index === 0 && key === props.slides.length-1) ? '-100%' : '100%',
                            zIndex: index === key ? 3 :  (index - 1) === key || (index === 0 && key === props.slides.length-1) ? 2 : 1,
                        }}
                    >
                        {prop}
                    </Slide>
                )
            }

        </Container>
    );
}

export default SlideContainer;