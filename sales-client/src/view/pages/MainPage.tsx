import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from "react-router-dom"
import "../styles/main.css"
import "../styles/Register.css"
// import { useAppContext } from '../../context/AppContext'
// import { AppContextIn } from '../../Interface/AppIn'
// import { useEffect } from 'react'

function MainPage() {

  
  // const {clientList, productsList} = useAppContext() as AppContextIn


  return (
    <div className='main-page-con'>
      <Sidebar/>
      <div className='main-page-layout'>
         <Navbar/>
        <Outlet/> 
      </div>
    </div>
  )
}

export default MainPage