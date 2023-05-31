import React from 'react'
import ClientCard from '../components/Cards/ClientCard/ClientCard'

const ClientCardExample = () => {
  return (
    <ClientCard
        name={'Jorge Gutiérrez Cordero'}
        clientTypeIcon={{
            fontFamily: "Material Symbols Outlined",
            name: "email",
            iconBrand: 'MATERIAL_ICONS',   
        }}
        idIcon={{
            fontFamily: "Material Symbols Outlined",
            name: "badge",
            iconBrand: 'MATERIAL_ICONS',   
        }}        
        clientType={'Paciente'}
        id={'118090772'}
        email={'jguty2001@gmail.com'}
        phone={'70560910'}
    />
  )
}

export default ClientCardExample