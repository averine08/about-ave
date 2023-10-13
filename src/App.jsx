// import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TechStack from './components/TechStack'
import Achievement from './components/Achievement'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {

  return (
    <>
    <div className="flex flex-col flex-wrap max-w-screen">
      <Navbar/>
      <Home/>
      <Achievement/>
      <TechStack/>
      <Project/>
      <Footer/>

      {
        //slider pengalaman
        // Im familiar with :  HTML, CSS, ...
        // My projects
      }

    </div>
    </>
  )
  //itu keanyo dk perlu div
}

export default App
