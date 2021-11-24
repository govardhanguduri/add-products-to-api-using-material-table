import {Route, Routes} from 'react-router-dom'

import Form from './components/Form'
import Table from './Tables'

import './App.css'

const App = () => (
  <div className="app-container mt-10" >
    <div className="responsive-container">
      <div className="app-body mt-10">
        <Routes>
          <Route exact path="/Form" element={<Form/>} />
          <Route exact path="/" element={<Table/>} />
        </Routes>
      </div>
    </div>
  </div>
)

export default App
