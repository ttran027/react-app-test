import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div class="App">
        <Nav/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;