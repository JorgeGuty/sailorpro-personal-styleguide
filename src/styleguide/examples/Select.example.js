import React from 'react'
import SPSelectInput from '../inputs/Select/Select'
import SPTextInput from '../inputs/Text/Text'

// style={{display:'flex',flexDirection: 'row'}}
export const SelectExample = () => {
  return (
    <div >
        <SPSelectInput
          label={"Select"}

          dropdownPriority={2}
          searchable={true}
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
          ]}
          onChangeValue = {
            () => {
              console.log('handling')
            }
          }
          required={true}
        />        
        <SPSelectInput
          label={"Select"}
          placeholder={"Seleccione una opción"}
          required={true}
          dropdownPriority={0}
          onChangeValue = {
            () => {
              console.log('handling')
            }
          }
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
          ]}          
        />      
      </div>
      
  )
}
