import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Render } from './demos/Render';
import TruncatedText from './components/TruncatedText';

function App() {
  const [count, setCount] = useState(0)

  const Nullish = memo(() => <Render type="null" />)
  const Fragment = memo(() => <Render type="fragment" />)

  return (
    <main>
      <h1>Render null</h1>
        <Nullish />
      <hr />

      <h1>Render Fragment</h1>
        <Fragment />
      <hr />

      {/* 
      <h1>Render Children</h1>
      <Render type="children">
        This is it
      </Render> */}

      <TruncatedText text="This is a long text that will be truncated" limit={3} />

    </main>
  )
}

export default App
