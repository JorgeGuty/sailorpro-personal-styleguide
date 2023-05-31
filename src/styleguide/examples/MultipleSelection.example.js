import React from 'react'
import SPMultipleSelectionInput from '../inputs/MultipleSelection/MultipleSelection'

export const MultipleSelectionExample = () => {
  return (
    <SPMultipleSelectionInput
        label={'Elija las opciones correspondientes'}
        required={true}
        onChangeValue={(options) => console.log('HANDLING...', options)}
        disabled={false}
        options={[
            {
              key: "1",
              value: "Primera opción"
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
                key: "11",
                value: "Primera opción"
              },
              {
                key: "12",
                value: "Segunda opción"
              },
              {
                key: "13",
                value: "Tercera opción"
              },
              {
                key: "14",
                value: "Cuarta opción"
              },
              {
                key: "15",
                value: "Quinta opción"
              },
              {
                key: "16",
                value: "Sexta opción"
              },
              {
                key: "17",
                value: "Quinta opción"
              },
              {
                key: "18",
                value: "Sexta opción"
              },                        
          ]}
        currentSelectedOptions={[
            {
              key: "1",
              value: "Primera opción"
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
              key: "8",
              value: "Sexta opción"
            },            
          ]}
        checkerType={'CHECKBOX'}
        maxSelectedItems={7}
        horizontalDisplay={true}
    />
  )
}
