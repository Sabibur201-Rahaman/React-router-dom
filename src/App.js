import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './Home' 
import {Contact}from './Contact'
import {About} from './About'
import MainNavbar from './MainNavbar'
import Company from './Company'
import Founder from './Founder'
import NotFound from './NotFound'
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='container text-center'>
    <MainNavbar/>
    <Routes>
 <Route index element={<Home/>}/>
 <Route path='/home' element={<Home/>}/>
      <Route path='/about'element={<About company='webdeveloper'/>}>
        <Route path='company/:name'element={<Company/>}/>
        <Route path='founder'element={<Founder/>}/>
      </Route>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
    </BrowserRouter>
   
    </>
  );
}
export default App;
