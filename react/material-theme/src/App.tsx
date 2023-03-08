import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Button as Button4} from 'mui4';
import {Button as Button5} from 'mui5';

import styled from '@emotion/styled';

const Button4Styled = styled(Button4)`
  background-color: #f00;
  color: #fff;
`;

const Button5Styled = styled(Button5)`
  background-color: #f00;
  color: #fff;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Stoked that my code updats so fast!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with TypeScript
        </a>  
      </header>
        <Button4Styled variant="contained" color="primary">Stoked!</Button4Styled>
        <Button5Styled variant="contained" color="primary">Stoked!</Button5Styled>
    </div>
  );
}

export default App;
