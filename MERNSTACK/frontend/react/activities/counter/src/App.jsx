import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleCounter() {
    setCount(count + 1);
}
  return (
    <>
      <button onClick={handleCounter}>Clicked {count} times</button>
    </>
  )
}

export default App
