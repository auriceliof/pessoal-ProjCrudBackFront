import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Listing from './pages/Listing'
import NewForm from './pages/NewForm'
import Header from './components/Header'

function App() {
 
  return (
    
    <BrowserRouter>
    
    <Header />
    
    <Routes>
      <Route path='/' element={<App />} />
      <Route index element={<Home />} />
      <Route path='listings' element={<Listing />}/>
      <Route path='Listings/:studentId' element={<NewForm />}/>
      <Route path='*' element={<Navigate to='/' />}/>
    </Routes>
  </BrowserRouter>  

  )
}

export default App
