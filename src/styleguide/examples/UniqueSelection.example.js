import React from 'react'
import SPUniqueSelectionInput from '../inputs/UniqueSelection/UniqueSelection.js'

export const UniqueSelectionExample = () => {
  return (
    <SPUniqueSelectionInput
        label={'Elija la opcion correspondientes'}
        required={true}
        onChangeValue={(option) => console.log('HANDLING...', option)}
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
        currentSelectedOption={
            {
              key: "1",
              value: "Primera opción"
            }            
        }
    />
  )
}
