import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
