import React from 'react'
import styled from 'styled-components'

const ScoreStyled = styled.div`
    width: 80px;
    background: white;
    border-radius: 8px;
    text-align: center;
    padding: 10px 0;

   span{
    color: grey;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
   }
   p{
       color: grey;
       font-size: 40px;
       margin: 0;
   }


`

const Score = () => {
    return (
        <ScoreStyled>
            <span>Score</span>
            <p>12</p>
        </ScoreStyled>
    )
}

export default Score
