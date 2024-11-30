import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { AppContextIn } from '../../../Interface/AppIn';

interface ModalProp{
    id: number
}

function ConfirmModal(prop: ModalProp) {

  const {deleteProduct, isShowConfirmModal, setShowConfirmModal} = useAppContext() as AppContextIn

  return (
    <>
    <ConfirmDialog 
          group="declarative"  
          visible={isShowConfirmModal} 
          accept={() => deleteProduct(prop.id)}
          onHide={() => setShowConfirmModal(false)} 
          message="Desea eliminar el producto seleccionado?" 
          header="Eliminar" icon="pi pi-exclamation-triangle" 
    />
</>
  )
}

export default ConfirmModal