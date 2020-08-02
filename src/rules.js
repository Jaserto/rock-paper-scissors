import React, { useState } from 'react';
import styled from 'styled-components'
import Button from './button'

const RulesStyled = styled.div`
    text-align:center;
    .rules-overlay{
        position:fixed;
        z-index: 2;
        background: white;
        top: 0;
        left:0;
        right:0;
        bottom: 0;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 4em 0;
        align-items:center;
    }
    
`

function Rules() {
    const [visible, setVisible] = useState(false);
    function handleClick(){
       setVisible(!visible);
    }
    return (
        <RulesStyled>
            {
                (visible) && (
                    <div className="rules-overlay">
                    <h2>Rules</h2>
                    <img src="./images/image-rules.svg" alt="Game Rules"></img>
                    <img onClick={ handleClick} src="./images/icon-close.svg" alt="Icon Close"></img>
    
                </div>
                )
            }
           
           <Button onClick={ handleClick }/>
        </RulesStyled>
    )
}


export default Rules