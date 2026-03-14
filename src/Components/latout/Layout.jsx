import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer.jsx'

export default function Layout() {
  return<>
    
  <Navbar />
  <Outlet></Outlet>
  <Footer/>
  </>
}