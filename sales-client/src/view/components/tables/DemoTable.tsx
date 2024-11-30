import { AppContextIn } from '../../../Interface/AppIn';
import { MdDeleteOutline } from "react-icons/md";
import { useAppContext } from '../../../context/AppContext';
import DeleteCliModal from '../Modals/DeleteCliModal';
import { useAuth } from '../../../context/AuthContext';
import { AuthContextIn } from '../../../Interface/AuthIn';

export default function DynamicColumnsDemo() {

    const {clients, setDelCliModal, setCliModify, setIsCliModify, showCliModal} = useAppContext() as AppContextIn
    const {user} = useAuth() as AuthContextIn

    function isArray(){
        if(clients.length > 0) return true
        return false
    }

  return (
    <div className='table-con'>
        <table>
            <thead className="register-thead">
                <tr>
                    <th className="td-id">#</th>
                    <th>Nombre y Apellido</th>
                    <th>Correo</th>
                    <th>telefono</th>
                    <th>DNI</th>
                    <th className='td-icon'></th>
                </tr>
            </thead>
            {
                !isArray? (<h1>No hay cliente</h1>): (
                     <tbody>
                        {
                            clients.map((data, id) => (
                                <tr 
                                    onClick={() => {
                                        setCliModify(data)
                                        setIsCliModify(true)
                                        showCliModal(true)
                                    }}
                                    key={id}>
                                    <td className="td-id">{id + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.telephone}</td>
                                    <td>{data.dni}</td>
                                    <td
                                        onClick={(e) =>{    
                                            e.stopPropagation()
                                        }}
                                        className='td-icon'
                                    >
                                        <div 
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                if(user.roles[0].name == "USER"){
                                                    alert("Permitido solo al administrador")
                                                    return
                                                }
                                                setDelCliModal(true)
                                            }}
                                            className="icon-con">
                                            <a className="my-anchor-element">
                                                <MdDeleteOutline/> 
                                            </a>
                                            {/* <Tooltip anchorSelect=".my-anchor-element" place="left-start">Eliminar</Tooltip> */}

                                        </div>
                                        <DeleteCliModal
                                                id={data.id as number}
                                        
                                        />
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