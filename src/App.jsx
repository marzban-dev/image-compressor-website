import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/side-navigation/sidebar.jsx'
import Welcome from './components/welcome/welcome.jsx'

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <div className={"wrapper"}>
                <Welcome/>
            </div>
        </div>
    )
}

export default App
