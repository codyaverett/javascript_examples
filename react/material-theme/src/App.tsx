import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Button as Button4} from 'mui4';
import {Button as Button5} from 'mui5';
import {Button as Button6} from 'mui6';

import styled from '@emotion/styled';

const Button4Styled = styled(Button4)`
`;

const Button5Styled = styled(Button5)`
`;

const Button6Styled = styled(Button6)`
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
        <Button4Styled variant="contained" color="primary">four!</Button4Styled>
        <Button5Styled variant="contained" color="primary">five!</Button5Styled>
        <Button6Styled variant="outlined" color="secondary">six!</Button6Styled>
    </div>
  );
}

export default App;
