import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/side-navigation/sidebar.jsx'
import Welcome from './components/body/welcome.jsx'

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Welcome/>
        </div>
    )
}

export default App
