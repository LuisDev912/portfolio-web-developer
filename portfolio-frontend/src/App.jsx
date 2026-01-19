import './styles/index.css'
import { Suspense } from 'react'

function App() {
  return (
    <Suspense fallback={<div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '15%',
      fontSize: 'var(--font-size-lg)',
      fontWeight: '600'
    }}> wait until the contend loads </div>} >

      <h1>Hey, I'm Luis</h1>

    </Suspense>
  )
}

export default App