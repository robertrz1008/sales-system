import { Dialog } from 'primereact/dialog';
import { useAppContext } from '../../../context/AppContext';
import { AppContextIn } from '../../../Interface/AppIn';
import { ReactNode } from 'react';

interface ContexArg{
  children: ReactNode
}

function FormModal({children}: ContexArg) {

  const context = useAppContext() as AppContextIn

  return (
    <div className="card flex justify-content-center">
    <Dialog header="Registro de Cliente" position='top' visible={context.isShowModal} style={{ width: '50vw', marginTop:"50px"}} onHide={() => {if (context.isShowModal) return; context.setShowModal(false); }}>
          {children}
    </Dialog>
</div>
  )
}

export default FormModal