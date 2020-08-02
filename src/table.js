import React from 'react'
import styled from 'styled-components'
import Token from './token'

const TableStyled = styled.div`
display: grid;
grid-template-columns: 130px 130px;
justify-items: center;
justify-content: center;
margin: 2em 0;;
position: relative;
grid-gap: 30px 50px;
& div:nth-of-type(3) {
    grid-column: span 2
}

    .line{
        height: 14px;
    
        background: rgba(0,0,0,.3);
        position: absolute;
        left:60px;
        top: 60px;
        right: 58px;
        &:before{
            content: '';           
            height: 14px;
            background: rgba(0,0,0,.3);
            position: absolute;
            left: 0px;
            top: 0px;
            right: 0px;
            transform: rotate(60deg);
            transform-origin: left top;
        }
        &:after{
            content: '';           
            height: 14px;
            background: rgba(0,0,0,.3);
            position: absolute;
            left:0px;
            top: 0px;
            right: 0px;
            transform: rotate(-60deg);
            transform-origin: right top;
        }
    }

`

function Table() {
    return (
        <TableStyled>
            <span className="line"></span>
            <Token name="rock"/>
            <Token name="scissors"/>
            <Token name="paper"/>
        </TableStyled>
    )
}

export default Table

