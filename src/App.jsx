import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contato from './pages/contato/contato'
import Fotos from './pages/fotos/fotos'
import Comentarios from './pages/comentarios/comentarios'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contato' element={<Contato></Contato>}></Route>
          <Route path='/fotos' element={<Fotos></Fotos>}></Route>
          <Route path='/comentarios' element={<Comentarios></Comentarios>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
