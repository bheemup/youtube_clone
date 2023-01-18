import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './componants/Home'
import PlayVideo from './componants/PlayVideo'
import Search from './componants/Search'

function App() {
  return (
    <div>
     <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<Search/>} path="/search"/>
      <Route element ={<PlayVideo/>} path="/play"/>
     </Routes>
    </div>
  )
}

export default App
