import React from 'react'
import SPListAndTextInput from '../inputs/ListAndText/ListAndText'

export const ListAndTextExample = () => {
  return (
    <div>
        <SPListAndTextInput
            label="Ingrese numero de telefono"
            dropdownPriority={3}
            options={[
                {
                    key: "1",
                    value: "pri",
                    prefix: '(506)'
                },
                {
                    key: "2",
                    value: "Seg",
                    prefix: '1 (49)'
                },
                {
                    key: "3",
                    value: "Ter",
                    prefix: 'JAJA'
                },
                {
                    key: "4",
                    value: "Cua",
                    prefix: 'Pre'
                },
                {
                    key: "5",
                    value: "Qui",
                    prefix: 'fijo'
                },
                {
                    key: "6",
                    value: "Sex",
                    prefix: 'Seis'
                },
                {
                    key: "7",
                    value: "Qui",
                    prefix: 'Siete'
                },
                {
                    key: "8",
                    value: "Sex",
                    prefix: 'jaja'
                },            
            ]}
            icon={{
                name: "info",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
                description: "Esta es la información"
            }}
            placeListRight={true}            
            onChangeValue={(content, maskedContent) => console.log('HANDLING...', content, maskedContent)}
        /> 
        <SPListAndTextInput
            label="Ingrese numero de telefono"
            dropdownPriority={2}
            required={true}
            options={[
                {
                    key: "1",
                    value: "Pri",
                    prefix: '(506)'
                },
                {
                    key: "2",
                    value: "Seg",
                    prefix: '1 (49)'
                },
                {
                    key: "3",
                    value: "Ter",
                    prefix: 'JAJA'
                },
                {
                    key: "4",
                    value: "Cua",
                    prefix: 'Pre'
                },
                {
                    key: "5",
                    value: "Qui",
                    prefix: 'fijo'
                },
                {
                    key: "6",
                    value: "Sex",
                    prefix: 'Seis'
                },
                {
                    key: "7",
                    value: "Qui",
                    prefix: 'Siete'
                },
                {
                    key: "8",
                    value: "Sex",
                    prefix: 'jaja'
                },            
            ]}
            placeholder={"Escriba aqui"}
            disabled={false}
            validPattern="^\d{3}$"
            icon={{
                name: "info",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
                description: "Esta es la información"
            }}
            placeListRight={true}
            onChangeValue={(content, maskedContent) => console.log('HANDLING...', content, maskedContent)}
        /> 
        <SPListAndTextInput
            label="Ingrese numero de telefono"
            dropdownPriority={1}
            required={true}
            options={[
                {
                    key: "1",
                    value: "Pri",
                    prefix: '(506)'
                },
                {
                    key: "2",
                    value: "Seg",
                    prefix: '1 (49)'
                },
                {
                    key: "3",
                    value: "Ter",
                    prefix: 'JAJA'
                },
                {
                    key: "4",
                    value: "Cua",
                    prefix: 'Pre'
                },
                {
                    key: "5",
                    value: "Qui",
                    prefix: 'fijo'
                },
                {
                    key: "6",
                    value: "Sex",
                    prefix: 'Seis'
                },
                {
                    key: "7",
                    value: "Qui",
                    prefix: 'Siete'
                },
                {
                    key: "8",
                    value: "Sex",
                    prefix: 'jaja'
                },            
            ]}
            icon={{
                name: "info",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
                description: "Esta es la información"
            }}
            onChangeValue={(content, maskedContent) => console.log('HANDLING...', content, maskedContent)}
        />  

      </div>
      
  )
}
