import { Button } from 'primereact/button'
import UserTable from '../../components/tables/UserTable'
import { useAppContext } from '../../../context/AppContext'
import { AppContextIn } from '../../../Interface/AppIn'
import { useEffect } from 'react'
import FormModal from '../../components/Modals/FormModal'
import UserForm from '../../components/forms/UserForm'

function UserPage() {

  const {setShowModal, setTitle} = useAppContext() as AppContextIn

  useEffect(() => {
    setTitle("Usuarios")
  }, [])

  return (
    <div className='main-con'>
        <div 
          style={{marginTop:"20px", width:"95%"}}
        >
            <Button 
              onClick={() => setShowModal(true)}
              label="Nuevo Usuario" 
            />
        </div>
        <UserTable/>
        <FormModal>
              <UserForm/>
        </FormModal>
    </div>
  )
}

export default UserPage