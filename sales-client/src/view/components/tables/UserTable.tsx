import { MdDeleteOutline } from "react-icons/md";
import { AuthContextIn } from '../../../Interface/AuthIn';
import { useAuth } from '../../../context/AuthContext';

export default function UserTable() {

    const {users} = useAuth() as AuthContextIn

    function isArray(){
        if(users.length > 0) return true
        return false
    }

  return (
    <div className='table-con'>
        <table>
            <thead className="register-thead">
                <tr>
                    <th className="td-id">#</th>
                    <th>Nombre y Apellido</th>
                    <th>telefono</th>
                    <th>Rol</th>
                    <th className='td-icon'></th>
                </tr>
            </thead>
            {
                !isArray? (<h1>No hay cliente</h1>): (
                     <tbody>
                        {
                            users.map((data, id) => (
                                <tr 
                                    // onClick={() => {
                                    //     setCliModify(data)
                                    //     setIsCliModify(true)
                                    //     showCliModal(true)
                                    // }}
                                    key={id}>
                                    <td className="td-id">{id + 1}</td>
                                    <td>{data.username}</td>
                                    <td>{data.telephone}</td>
                                    <td>{data.roles[0].name}</td>
                                    <td
                                        onClick={(e) =>{    
                                            e.stopPropagation()
                                        }}
                                        className='td-icon'
                                    >
                                        <div 
                                            // onClick={(e) => {
                                            //     e.stopPropagation()
                                            //     setDelCliModal(true)
                                            // }}
                                            className="icon-con">
                                            <a className="my-anchor-element">
                                                <MdDeleteOutline/> 
                                            </a>
                                            {/* <Tooltip anchorSelect=".my-anchor-element" place="left-start">Eliminar</Tooltip> */}

                                        </div>
                                        {/* <DeleteCliModal
                                                id={data.id as number}
                                        
                                        /> */}
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