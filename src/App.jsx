import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Foot from './pages/Products/Footwear';
import Low from './pages/Products/Lower';
import Upp from './pages/Products/Upper';
import Acces from './pages/Products/Accessories';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Sidebar/> */}
        <main>
          <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/footwear" element={<Foot />} />
            <Route path="/products/lower" element={<Low />} />
            <Route path="/products/upper" element={<Upp />} />
            <Route path="/products/accessories" element={<Acces />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
