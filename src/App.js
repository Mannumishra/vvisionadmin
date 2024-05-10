import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Testimonial from './Components/Testimonial/Testimonial';
import CreateTestimonial from './Components/Testimonial/CreateTestimonial';
import UpdateTestimonial from './Components/Testimonial/UpdateTestimonial';
import Contact from './Components/Contact/Contact';
import Newsletter from './Components/Newsletter/Newsletter';
import Product from './Components/Product/Product';
import CreateProduct from './Components/Product/CreateProduct';
import UpdateProduct from './Components/Product/UpdateProduct';
import Category from './Components/Category/Category';
import CreateCategory from './Components/Category/CreateCategory';
import UpdateCategory from './Components/Category/UpdateCategory';
import Login from './Components/Login/Login';


function App() {
  const login = sessionStorage.getItem("login")
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
        <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/createtestimonial' element={<CreateTestimonial />} />
          <Route path='/updatetestimonial/:_id' element={<UpdateTestimonial />} />

          <Route path='/newsletter' element={<Newsletter />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/product' element={<Product />} />
          <Route path='/createproduct' element={<CreateProduct />} />
          <Route path='/updateProduct/:_id' element={<UpdateProduct />} />

           <Route path='/category' element={<Category />} />
          <Route path='/createcategory' element={<CreateCategory />} />
          <Route path='/updatecategory/:_id' element={<UpdateCategory />} />

          <Route path='/' element={login ? "" : <Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
