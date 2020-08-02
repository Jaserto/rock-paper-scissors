import React from 'react'
import styled from 'styled-components'
import Score from './score.js'

const HeaderStyled = styled.div`
display:flex;
color: white;
padding: 12px 12px 12px 23px;
border-radius: 5px; 
border: 3px solid rgba(255, 255,255, .29);
justify-content: space-between;
align-items: center;

    h1 {
    font-size: 21px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 16px;
    }
`

function Header() {
    return (
        <HeaderStyled>
            <h1>
                Rock <br /> Paper <br /> Scissors
            </h1>
            <Score />

        </HeaderStyled>
    )
}

export default Header

