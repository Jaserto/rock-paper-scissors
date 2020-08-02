import React from 'react'
import styled from 'styled-components'

const TokenStyled = styled.div`
width: 130px;
display: flex;

height: 130px;
border-radius: 50%;
border: 15px solid ${(props) => props.color.base};
box-sizing: border-box;
background:white;
box-shadow: 0 5px 0 ${(props) => props.color.border};
cursor: pointer;
&:active{
    transform: scale(.9);
}


    .box{
        box-shadow: 0 -5px 0 #bcc1d5;
        flex: 1;
        align-self: stretch;
        border-radius: 50%;
        display: flex; 
        justify-content: center;
        align-items: center;
    }


`

const colors = {
    paper: {
      base: '#516ef4',
      border: '#2543c3',
    },
    rock: {
      base: '#de3a5a',
      border: '#980e31',
    },
    scissors: {
      base: '#eca81e',
      border: '#c76c14',
    },
    default: {
      base: 'trasparent',
      border: 'trasparent',
    }
  }

function Token({ name }) {
    return (
        <TokenStyled color={colors[name]}>
            <div className="box">
            <img src={`./images/icon-${name}.svg`} alt=""></img>
            </div>     
           
        </TokenStyled>
    )
}

export default Token

