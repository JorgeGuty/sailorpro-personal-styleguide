import React from 'react'
import SPDateInput from '../inputs/Date/Date'

export const DateExample = () => {
  return (
    <div>
        <SPDateInput
            label={"Fecha"}
            required={true}
            // disabled={true}
            errorMessage={'ingrese una fecha valida'}
            onChangeValue={(content) => console.log('HANDLING...', content)}
        />                                     
    </div>
  )
}
