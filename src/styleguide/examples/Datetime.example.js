import React from 'react'
import SPDateTimeInput from '../inputs/Datetime/Datetime'

export const DatetimeExample = () => {
  return (
    <div>
        <SPDateTimeInput
            label={"Fecha"}
            required={true}
            // disabled={true}
            errorMessage={'ingrese una fecha valida'}
            onChangeValue={(content) => console.log('HANDLING...', content)}
        />
    </div>
  )
}
