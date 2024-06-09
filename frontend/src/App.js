import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx';
import Blogs from './Pages/Blogs.jsx';
import Contact from './Pages/Contact.jsx';
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignup from './Pages/LoginSignup.jsx'
import Footer from './Components/Footer/Footer.jsx';
import kids_banner from './Components/Assets/banner_img1.jpg'

function App() {
  return (
    <div>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Shop/>} />
    <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>} />
    <Route path='/blogs' element={<Blogs/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/product' element={<Product/>} >
    <Route path=':productId' element={<Product/>} />
     </Route>
     <Route path='/cart' element={<Cart/>} />
     <Route path='/login' element={<LoginSignup/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    </div>
  );
}

export default App;
