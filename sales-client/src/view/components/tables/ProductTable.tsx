import { AppContextIn } from '../../../Interface/AppIn';
import { MdDeleteOutline } from "react-icons/md";
import { useAppContext } from '../../../context/AppContext';
import { useAuth } from '../../../context/AuthContext';
import { AuthContextIn } from '../../../Interface/AuthIn';
import ConfirmModal from '../Modals/ConfirmModal';

export default function ProductTable() {

    const {products, setShowConfirmModal, setProModify, setProUpdate, setShowModal} = useAppContext() as AppContextIn
    const {user} = useAuth() as AuthContextIn

    function isArray(){
        if(products.length > 0) return true
        return false
    }

  return (
    <div className='table-con'>
        <table>
            <thead className="register-thead">
                <tr>
                    <th className="td-id">#</th>
                    <th>Desctipcion</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th className='td-icon'></th>
                </tr>
            </thead>
            {
                !isArray? (<h1>No hay cliente</h1>): (
                     <tbody>
                        {
                            products.map((data, id) => (
                                <tr 
                                    onClick={() =>{    
                                        setProModify(true)
                                        setProUpdate(data)
                                        setShowModal(true)
                                        console.log("click")
                                    }}
                                className='td-icon'
                                    key={id}>
                                    <td className="td-id">{id + 1}</td>
                                    <td>{data.description }</td>
                                    <td>{data.category.description}</td>
                                    <td>{data.price}</td>
                                    <td
                                    >
                                        <div 
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                if(user.roles[0].name == "USER"){
                                                    alert("Permitido solo al administrador")
                                                    return
                                                }
                                                setShowConfirmModal(true)
                                            }}
                                            className="icon-con">
                                            <a className="my-anchor-element">
                                                <MdDeleteOutline/> 
                                            </a>
                                        </div>
                                        <ConfirmModal id={data.id as number}/>
                                    </td>
                                </tr> 

                            ))
                        }
                    </tbody> 
                )
            }
            
        </table>
    </div>
  )
}