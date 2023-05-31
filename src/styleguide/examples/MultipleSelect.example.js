import React from 'react'
import { SPMultipleSelectInput } from '../inputs/MultipleSelect/MultipleSelect'

export const MultipleSelectExample = () => {
  return (
    <div >
        <SPMultipleSelectInput
          label={"Select"}
          disabled={false}
          placeholder={"Seleccione una opción"}
          searchable={true}
          options={[
            {
              key: "1",
              value: "Primera opción"
            },
            {
              key: "5",
              value: "Quinta opción"
            },
            {
              key: "6",
              value: "Sexta opción"
            },
            {
              key: "7",
              value: "Quinta opción"
            },
            {
              key: "8",
              value: "Sexta opción"
            },    
            {
              key: "2",
              value: "Segunda opción"
            },
            {
              key: "3",
              value: "Tercera opción"
            },
            {
              key: "4",
              value: "Cuarta opción"
            }                     
          ]}
          currentSelectedOptions={[
            {
              key: "2",
              value: "Segunda opción"
            },
            {
              key: "3",
              value: "Tercera opción"
            },
            {
              key: "4",
              value: "Cuarta opción"
            }                                       
          ]}
          onChangeValue = {
            (selectedOptions, availableOptions) => {
              console.log('handling...', selectedOptions, availableOptions)
            }
          }
          required={true}
          maxSelectedOptions={4}
        />      
      </div>
      
  )
}
