import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Validator, Overview } from './Pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/' element={<Overview />} />
            <Route path='/validator' element={<Validator />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
