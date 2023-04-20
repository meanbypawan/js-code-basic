import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Signup from './components/user/signup/Signup';
import 'react-toastify/dist/ReactToastify.css'
import Signin from './components/user/signin/Signin';
import Cart from './components/user/cart/Cart';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
    </Routes>
  </>
}

export default App;
