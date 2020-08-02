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
grid-gap: 50px;
& div:nth-of-type(3) {
    grid-column: span 2
}

    .line{
        height: 10px;
        width: 100%;
        
        background: black;
        position: absolute;
        left: 0;
        top: 60px ;
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

