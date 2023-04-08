import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/side-navigation/sidebar.jsx'
import Welcome from './components/welcome/welcome.jsx'
import About from "./components/about/about.jsx";

function App() {
    return (
        <div className="App">
            <div className={"wrapper"}>
                <Welcome/>
                <About/>
            </div>
            <Sidebar/>
        </div>


    )
}

export default App
