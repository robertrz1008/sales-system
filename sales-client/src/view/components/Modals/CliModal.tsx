import { useAppContext } from '../../../context/AppContext'
import { AppContextIn, Client } from '../../../Interface/AppIn'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { useEffect, useState } from 'react';

function CliModal() {

  const {isCliModal, showCliModal, createClient, isCliModify, cliModify, udpateClient} = useAppContext() as AppContextIn

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [direction, setDirection] = useState("")
  const [tel, setTel] = useState("")
  const [dni, setDni] = useState("")

  useEffect(() => {
    if(isCliModify && cliModify){
      setName(cliModify.name)
      setEmail(cliModify.email)
      setDirection(cliModify.direction)
      setTel(cliModify.telephone)
      setDni(cliModify.dni)
    }
    if(!isCliModify){
      clear()
    }
  }, [isCliModify])

  function clear(){
    setName("")
      setEmail("")
      setDirection("")
      setTel("")
      setDni("")
  }

  function handleSubmit(){
    const cli: Client = {
        name: name,
        email: email,
        direction: direction,
        telephone: tel,
        dni: dni
    }

    if(isCliModify) return udpateClient(cliModify.id as number, cli)

    createClient(cli)
  }

  return (
    <div className="card flex justify-content-center">
            <Dialog header="Registro de Cliente" position='top' visible={isCliModal} style={{ width: '50vw', marginTop:"50px"}} onHide={() => {if (!isCliModal) return; showCliModal(false); }}>

                <form
                 style={{width:"100%"}}>
                    <InputText variant="filled" onChange={(e) => setName(e.target.value)}  value={name}type="text" placeholder="Nombre y apellido" />
                    <InputText variant="filled" onChange={(e) => setEmail(e.target.value)}  value={email} type="text" placeholder="Correo" />
                    <InputText variant="filled" onChange={(e) => setDirection(e.target.value)}  value={direction} type="text" placeholder="Direccion" />
                    <InputText variant="filled" onChange={(e) => setDni(e.target.value)}  value={dni} type="text" placeholder="DNI" />
                    <InputMask variant="filled" onChange={(e) => setTel(e.target.value as string)}  value={tel} id="ssn" mask="999-99-999" placeholder="999-999-9999"></InputMask>
                </form>

                <div style={{width:"100%", display:"flex", justifyContent:"end", marginTop:"10px"}}>
                    <Button onClick={() => showCliModal(false)} label="Calcel" text />
                    <Button onClick={(_e) => handleSubmit()}  icon="pi pi-times" label="Save"></Button>
                </div>
            </Dialog>
        </div>
  )
}

export default CliModal