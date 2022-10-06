import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import FormSignup from './pages/FormSignup';
import Login from './pages/Login';
import Map from './pages/Map';
import { AdminPage } from './pages/AdminPage';

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
        <Route path='Map' element={<Map />} />
        <Route path='Admin-page' element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
