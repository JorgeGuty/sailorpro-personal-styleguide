import React from 'react'
import Table from '../components/Table/Table'

const TableExample = () => {
  return (
    <div>
        <Table
            columnConfigurations={[
                {
                    name: 'Expediente',
                    attributeName: 'recordId',
                    renderAttributeValue: (value) => {
                        return value
                    },                                         
                },
                {
                    name: 'Nombre',
                    attributeName: 'name',
                },
                {
                    name: 'Apellidos',
                    attributeName: 'lastNames',
                },
                {
                    name: 'Sexo',
                    attributeName: 'gender',
                    renderAttributeValue: (value) => {
                        return value
                    },                    
                },
                {
                    name: 'Teléfono',
                    attributeName: 'phone',
                },         
                {
                    name: 'Correo Electrónico',
                    attributeName: 'email',         
                },                        
            ]}
            records={[
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },        
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },  
                {
                    recordId: 1000,
                    name: 'Jorge',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1001,
                    name: 'Juan',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1010,
                    name: 'Pedro',
                    lastNames: 'Gutiérrez Cordero Gurdián Oreamuno Gutiérrez',
                    gender: 'Femenino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1011,
                    name: 'Pascal',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },
                {
                    recordId: 1100,
                    name: 'Jiji',
                    lastNames: 'Gutiérrez Cordero',
                    gender: 'Masculino',
                    phone: '70560910',
                    email: 'jguty2001@gmail.com'
                },                                                                                                                                                                                                                                 
            ]}
            onClickConfiguration={{
                onClickRow: (rowId) => {
                    console.log('Clicked', rowId)
                },
                identifierAttribute: 'recordId',                
            }}
            pageSize={20}	
        />
    </div>
  )
}

export default TableExample