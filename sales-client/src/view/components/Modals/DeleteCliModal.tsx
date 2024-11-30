import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { AppContextIn } from '../../../Interface/AppIn';

interface ModalProp{
    id: number
}

function DeleteCliModal(prop: ModalProp) {

  const {deleteClient, isDelCliModal, setDelCliModal} = useAppContext() as AppContextIn

  const d = () => {
    deleteClient(prop.id)
    return true
  }

  return (
    <>
    <ConfirmDialog 
          group="declarative"  
          visible={isDelCliModal} 
          accept={d}
          onHide={() => setDelCliModal(false)} 
          message="Desea eliminar el producto seleccionado?" 
          header="Eliminar" icon="pi pi-exclamation-triangle" 
    />
</>
  )
}

export default DeleteCliModal