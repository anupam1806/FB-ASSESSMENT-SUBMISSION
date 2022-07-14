import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Login/register';
import Login from './components/Login/login';
import Facebook from './components/fb/connect';
import Delete from './components/fb/delete';
import Dashboard from './components/chat/dashboard';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/facebook" element={<Facebook/>} />
        <Route path="/facebook/delete" element={<Delete/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
    {/* <Register /> */}
    {/* <Login /> */}
    {/* <Facebook /> */}
    {/* <Delete /> */}
    {/* <Dashboard /> */}
    {/* <CardComponent /> */}
    </>
  );
}

export default App;
