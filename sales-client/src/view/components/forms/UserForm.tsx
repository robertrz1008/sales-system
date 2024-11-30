import { Button } from 'primereact/button'
import { InputMask } from 'primereact/inputmask'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { useAppContext } from '../../../context/AppContext'
import { AppContextIn } from '../../../Interface/AppIn'
import { AuthContextIn, CreateUser } from '../../../Interface/AuthIn'
import { useAuth } from '../../../context/AuthContext';

function UserForm() {

    const {setShowModal} = useAppContext() as AppContextIn
    const {createUser} = useAuth() as AuthContextIn

    const [name, setName] = useState("")
    const [telephone, setTelephone] = useState("")
    const [rol, setRol] = useState<{name: string, code: string}>()
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const cities = [
     { name: 'ADMIN', code: 'ADMIN' },
     { name: 'PERSONAL', code: 'PERSONAL' },
     { name: 'USER', code: 'USER' },
 ];

     function validate() {
          if(pass != confirmPass) return false

          if (!name || !telephone || !pass) {
               alert("completa todos los campos")
               return false
          }
          
          return true;
     }


     async function HandleSubmit(){
          const newUser: CreateUser = {
               username: name,
               telephone: telephone,
               password: pass,
               roleRequest: {
                    roleListName: [rol?.name as string]
               }
          } 

          if(!validate()) return 

          try {
               await createUser(newUser)
          } catch (error) {
               console.log(error)
          }
     }
    
  return (
     <form
          className='register-form'
          onSubmit={(e) =>{
               e.preventDefault() 
               HandleSubmit()
          }}
          style={{width:"100%"}}
     >
          <label htmlFor="username">Username</label>
          <InputText 
               variant="filled" 
               onChange={(e) => setName(e.target.value)}  
               value={name}type="text" 
               placeholder="" 
          />

          <label htmlFor="username">Telefono</label>
          <InputMask 
               variant="filled" 
               onChange={(e) => setTelephone(e.target.value as string)}  
               value={telephone} id="ssn" 
               mask="999-99-999" 
               placeholder="Telefono">
          </InputMask>

          <Dropdown 
               value={rol} 
               onChange={(e: DropdownChangeEvent) => setRol(e.value)} 
               options={cities} 
               optionLabel="name" 
               placeholder="Select a City" 
               className="w-full md:w-14rem" 
               style={{width:"100%"}}
          />

          <label htmlFor="username">Contraseña</label>
          <InputText 
               variant="filled" 
               onChange={(e) => setPass(e.target.value)}  
               value={pass} 
               type="password" 
               placeholder="Contraseña" 
          />
          <label htmlFor="username">confirmar Contraseña</label>
          <InputText 
               variant="filled" 
               onChange={(e) => setConfirmPass(e.target.value)}
               value={confirmPass} 
               type="password" 
               placeholder="Confirmar Contraseña" 
          />
      

       <div style={{width:"100%", display:"flex", justifyContent:"end", marginTop:"10px"}}>
            <Button type='reset' onClick={() => setShowModal(false)} label="Calcel" text />
            <Button type='submit'  icon="pi pi-times" label="Save"></Button>
        </div>
   </form>
  )
}

export default UserForm