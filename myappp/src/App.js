import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Footer from './components/footer';
import SignUp from './components/signUp';
// import login from './components/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/'  element={<h1>products listening components</h1>}/>
          <Route path='/add'  element={<h1> add products listening components</h1>}/>
          <Route path='/update'  element={<h1> update products listening components</h1>}/>
          <Route path='/logout'  element={<h1> login products listening components</h1>}/>
          <Route path='/profile'  element={<h1>profile  products listening components</h1>}/>
          <Route path='/SignUp' element={<SignUp />}/>
         
        </Routes>
        
        
        
      </BrowserRouter>
      <Footer/>
     
    </div>
    
  );
}
export default App;
