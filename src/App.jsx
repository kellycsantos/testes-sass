import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sass</h1>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi magnam assumenda rem accusamus, recusandae quo aliquid ea necessitatibus enim incidunt?</p>
      <main className='light'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nobis voluptates commodi beatae eveniet porro. Maiores nemo sunt optio quis ducimus id consectetur magni hic tempora aut. Suscipit, corrupti ducimus! Expedita ea inventore perferendis deleniti.</p>

      </main>

      <div className='tematica'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae facilis, rem similique laborum pariatur ipsam repudiandae commodi, illum et eaque quis quod in necessitatibus adipisci nam, eos doloremque sunt!</p>
          <button>Certo</button>
      </div>
      <div className='tamanho'>Calculo 100vw - 20%</div>
    </>
  )
}

export default App
