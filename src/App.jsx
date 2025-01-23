import React from "react"
import NavBar from './components/NavBar'
import Home from './components/Home'
function App() {


  return (
    <>
      <NavBar />
        <div className="bg-amber-500 mt-20 text-6xl text-center">Hello Tailwind v4 </div>
      <Home />
    </>
  )
}

export default App
