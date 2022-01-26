import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Inicio from './components/Inicio.jsx'
import Menu from './components/Menu.jsx'
import Login from './components/Login.jsx'
import Admin from './components/Admin.jsx'

function App() {
  return (
    <Router>
      <div className='container'>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
