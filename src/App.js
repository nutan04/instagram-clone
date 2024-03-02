
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userprofile from './Pages/UserProfile/Userprofile';
import Header from './Layout/Header/Header';
import Explore from './Pages/Explore/Explore';
import Myprofile from './Pages/MyProfile/Myprofile';
import Message from './Pages/Messanger/Message';
import { Add } from '@mui/icons-material';
import Addstory from './Pages/Add/Addstory';
function App() {
  return (

    <Router>
    <Header />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/add" element={<Addstory />} />
        



        {/* Define other routes that you need*/}
      </Routes>
    </main>
  </Router>
  );
}

export default App;
