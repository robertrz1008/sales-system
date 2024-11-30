
import { MdOutlineHome } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Sidebar() {

  return (
    <div className='sidebar-con dashboard-section '>
             <div 
          className='menu-exit-con'
            onClick={(_e) => {
                //ChangeLaout()
            }}
        >  
            {/* <IoMdMenu/> */}
            <div style={{marginLeft:"20px", color:"red",}}>
                <h1>sicot</h1>
            </div>
        </div>
           <div className="dashboard-list-con">
            <ul className={'dashborad-list'}>
                {/* <li>
                    <NavLink 
                        to="/home"
                        className={"link-item"}
                    >
                        <MdOutlineHome/>
                        <h5>Inicio</h5>
                    </NavLink>
                </li> */}
                <li>
                    <NavLink 
                        to="/users"
                        className={({isActive}) => (isActive ? "link-item item-active" : "link-item")}
                    >
                        <IoPersonOutline/>
                        <h5>Usuarios</h5>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/clients"
                        className={({isActive}) => (isActive ? "link-item item-active" : "link-item")}>
                        <IoPersonOutline/>
                        <h5>Cliente</h5>
                    </NavLink>
                </li>
                <li> 
                    <NavLink 
                        to="/Products"
                        className={({isActive}) => (isActive ? "link-item item-active" : "link-item")}>
                        <AiOutlineProduct/>
                        <h5>Productos</h5>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink 
                        to="/Sale"
                        className={({isActive}) => (isActive ? "link-item item-active" : "link-item")}>
                        <MdOutlineShoppingCart/>
                        <h5>Vender</h5>
                    </NavLink>
                </li>
                
                </ul>
           </div>
    </div>
  )
}

export default Sidebar