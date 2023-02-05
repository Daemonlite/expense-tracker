import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home'
import {ToastContainer} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CreateBudget from './pages/CreateBudget';
import CreatePurchase from './pages/CreatePurchase';
import Purchases from './pages/Purchases';
import Error from './components/Error';
function App() {
  return (
    <div >
      <ToastContainer position='top-center'/>
   
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/budget/create' element={<CreateBudget/>} />
      <Route path='/create_purchase' element={<CreatePurchase/>}/>
      <Route path='/purchases' element={<Purchases/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
