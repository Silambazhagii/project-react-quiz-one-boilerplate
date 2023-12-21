import React from 'react'
import ReactDOM from 'react-dom'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import HomeComponent from './Components/HomeComponent.jsx'
import QuizComponent from './Components/QuizComponent.jsx'
import ResultComponent from './Components/ResultComponent.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeComponent/>
    <QuizComponent/>
    <ResultComponent/>
  </React.StrictMode>,
)
export default App