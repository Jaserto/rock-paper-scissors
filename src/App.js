import React from 'react';
import './App.css';
import Header from './header'
import styled from 'styled-components'
import Wrapper from './wrapper'
import Table from './table'


const AppStyled = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800&display=swap');
  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
  font-family: 'Barlow Semi Condensed', sans-serif;
  min-height: 100vh;
  padding: 2em;
  color: white;
`

function App() {
  return (
    <AppStyled>

      <Wrapper>
        <Header />
        <Table />
      </Wrapper>
      
    </AppStyled>

  
  );
}

export default App;
