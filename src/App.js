import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from './pages/write/Write';
import Settings from"./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function App() {
  
  return (
    
    <Router>
        <div className="app-container">
        <TopBar />
    <Routes>
    <Route exact path="/home" element={<Home/>} />
    
    
    <Route path="/register" element={<Register/>} />


    <Route path="/login" element={<Login/>} />
    <Route path="/settings" element={<Settings/>} />
    <Route path="/write" element={<Write/>} />
    <Route path="/single" element={<Single /> } />
    <Route path="/write" element={<Single />} />
</Routes>
</div>
</Router>
    
  );
}

export default App;
