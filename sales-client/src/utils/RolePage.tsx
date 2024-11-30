import { useState } from 'react'
import { createRoleRequest } from '../Service/Auth.service';
import { Button } from 'primereact/button';

function RolePage() {

  const [name, setName] = useState("");


  async function Create(){
    try {
      await createRoleRequest({name: name})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <h2>Nuevo role</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='rol' value={name}/>
        <Button onClick={() =>Create()} label='Save'/>
    </div>
  )
}

export default RolePage