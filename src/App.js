import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import FormSignup from './components/pages/FormSignup';
import Login from './components/pages/Login';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' >
        <Route index element={<Home />} />
        <Route path='sign-up' element={<FormSignup />} />
        <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
