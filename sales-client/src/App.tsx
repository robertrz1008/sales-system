import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./view/pages/RegisterPage";
import ProtectedRoute from "./view/pages/RouteProtected";
import MainPage from "./view/pages/MainPage";
import HomePage from "./view/pages/main/HomePage";
import ClientPage from "./view/pages/main/ClientPage";
import UserPage from "./view/pages/main/UserPage";
import RolePage from "./utils/RolePage";
import TestPage from "./view/pages/test/TestPage";
import ProductPage from "./view/pages/main/ProductPage";
import SalePage from "./view/pages/main/SalePage";


function App() {


  return (
    <BrowserRouter>
    <Routes>
          <Route path={"/login"} element={<RegisterPage/>}/>  
          <Route path={"/role"} element={<RolePage/>}/>  
          <Route path={"/test"} element={<TestPage/>}/>  
          <Route element={<ProtectedRoute/>}>
               <Route path={"/*"} element={<MainPage/>}>
                    <Route path={"home"} element={<HomePage/>}/>
                    <Route path={"clients"} element={<ClientPage/>}/>  
                    <Route path={"users"} element={<UserPage/>}/>  
                    <Route path={"Products"} element={<ProductPage/>}/>  
                    <Route path={"Sale"} element={<SalePage/>}/>  
               </Route>
          </Route>
    </Routes>
</BrowserRouter>
     
  )
}

export default App
