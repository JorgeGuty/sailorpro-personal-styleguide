import React from 'react'
import { SPCKEditorInput } from '../inputs/CKEditor/CKEditor'

const CKEditorExample = () => {
  return (
    <div>
        <SPCKEditorInput
            label={'Haga la receta'}
            disabled={false}
            onChangeValue={(htmlContent) => console.log("HANDLING HTML...", htmlContent)}
            required={true}
            template={'<p>Este es el template de prueba</p>'}
        />
    </div>
  )
}

export default CKEditorExample