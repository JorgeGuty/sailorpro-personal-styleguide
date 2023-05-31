import React from 'react'
import SPTimeInput from '../inputs/Time/Time'

export const TimeExample = () => {
  return (
    <div>
        
        <SPTimeInput
            disabled={false}
            label={'hora'}
            required={true}
            onChangeValue={(hour) => console.log(hour)}
        />

    </div>
  )
}
