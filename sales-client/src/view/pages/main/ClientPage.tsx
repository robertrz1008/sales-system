import { Button } from 'primereact/button'
import DynamicColumnsDemo from '../../components/tables/DemoTable'
import { useAppContext } from '../../../context/AppContext'
import { AppContextIn } from '../../../Interface/AppIn'
import CliModal from '../../components/Modals/CliModal'
import { useEffect } from 'react'

function ClientPage() {

  const {showCliModal, setIsCliModify,setTitle} = useAppContext() as AppContextIn

  useEffect(() => {
    setTitle("Clientes")
  }, [])

  return (
    <div className='main-con'>
        <div 
          style={{marginTop:"20px", width:"95%"}}
        >
            <Button onClick={ () => {
              setIsCliModify(false)
              showCliModal(true)
            }}
              label="Registrar Cliente" 
            />
        </div>

        <DynamicColumnsDemo/>
        <CliModal/>
    </div>
  )
}

export default ClientPage