import React from 'react'
import SPTextInput from '../inputs/Text/Text'

export const TextExample = () => {
  return (
    <div>
        <SPTextInput
          placeholder={"Escriba el texto aquí"}
          disabled={false}
          // numeric={true}
          validPattern="^\d{3}$"
          icon={{
            name: "info",
            fontFamily: 'Material Symbols Outlined',
            iconBrand: 'MATERIAL_ICONS',
            description: "Ingrese el número de teléfono en la entrada, debe escribir solo números en la entrada"
          }}
          placeIconRight={true}
          prefix={"http://"}
          onChangeValue={(content) => console.log('HANDLING... ', content)}
          label={"Email"}
          errorMessage={"error"}
          mask={"(___) ____-____"}
          required={true}
        />
        <SPTextInput
          placeholder={"Escriba el texto aquí"}
          disabled={false}
          validPattern="^\d{3}$"
          numeric={true}
          icon={{
            name: "email",
            iconBrand: 'MATERIAL_ICONS',
            fontFamily: 'Material Symbols Outlined',
            description: "Esta es la información"
          }}
          prefix={"http://"}
          onChangeValue={(content) => console.log('HANDLING... ', content)}
          label={"Email"}
          errorMessage={"sea imbecil"}
          required={true}
        />
        <SPTextInput
          placeholder={"Escriba el texto aquí"}
          disabled={false}
          validPattern="^\d{3}$"
          // numeric={true}
          icon={{
            name: "email",
            iconBrand: 'MATERIAL_ICONS',
            fontFamily: 'Material Symbols Outlined',
            description: "Esta es la información"
          }}
          placeIconRight={true}
          // prefix={"http://"}
          onChangeValue={(content) => console.log('HANDLING... ', content)}
          label={"Email"}
          errorMessage={"señor, desde la linea del respeto, su entrada tiene un error."}
          required={true}
          // secureTextEntry={true}
        />
    </div>
  )
}
