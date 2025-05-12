import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Tournaments from './pages/Tournaments'
import Links from './pages/Links'
import Teams from './pages/Teams'
import Profile from './pages/Profile'
import Header from './components/Header'
import Login from './pages/Login'
function App() {
  return (
    <div className="min-h-screen w-full bg-csCream">
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="links" element={<Links />} />
        <Route path="teams" element={<Teams />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

