import React from 'react'
import FloatingButton from '../components/Buttons/FloatingButton/FloatingButton'
import ActionMenu from '../components/ActionMenu/ActionMenu';

const ActionMenuExample = () => {

    const buttons = [
        {
            text: 'Información',
            onClick: () =>  {
                console.log('====================================');
                console.log('Información');
                console.log('====================================');
            },
            icon: {
                name: "info",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }
        },
        {
            text: 'Email',
            onClick: () =>  {
                console.log('====================================');
                console.log('Email');
                console.log('====================================');
            },
            icon: {
                name: "email",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }
        },
        {
            text: 'Subir documento',
            onClick: () =>  {
                console.log('====================================');
                console.log('Información');
                console.log('====================================');
            },
            icon: {
                name: "file_upload",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }
        },
        {
            text: 'Buscar',
            onClick: () =>  {
                console.log('====================================');
                console.log('Buscar');
                console.log('====================================');
            },
            icon: {
                name: "search",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }
        },
        {
            text: 'Borrar',
            onClick: () =>  {
                console.log('====================================');
                console.log('Borrar');
                console.log('====================================');
            },
            icon: {
                name: "delete",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }
        },                                
    ]

    return (
        <div>
            <ActionMenu
                buttons={[
                    {
                        text: 'Información',
                        onClick: () =>  {
                            console.log('====================================');
                            console.log('Información');
                            console.log('====================================');
                        },
                        icon: {
                            name: "info",
                            fontFamily: 'Material Symbols Outlined',
                            iconBrand: 'MATERIAL_ICONS',
                        }
                    },
                    {
                        text: 'Email',
                        onClick: () =>  {
                            console.log('====================================');
                            console.log('Email');
                            console.log('====================================');
                        },
                        icon: {
                            name: "email",
                            fontFamily: 'Material Symbols Outlined',
                            iconBrand: 'MATERIAL_ICONS',
                        }
                    },
                    {
                        text: 'Subir documento',
                        onClick: () =>  {
                            console.log('====================================');
                            console.log('Información');
                            console.log('====================================');
                        },
                        icon: {
                            name: "file_upload",
                            fontFamily: 'Material Symbols Outlined',
                            iconBrand: 'MATERIAL_ICONS',
                        }
                    },
                    {
                        text: 'Buscar',
                        onClick: () =>  {
                            console.log('====================================');
                            console.log('Buscar');
                            console.log('====================================');
                        },
                        icon: {
                            name: "search",
                            fontFamily: 'Material Symbols Outlined',
                            iconBrand: 'MATERIAL_ICONS',
                        }
                    },
                    {
                        text: 'Borrar',
                        onClick: () =>  {
                            console.log('====================================');
                            console.log('Borrar');
                            console.log('====================================');
                        },
                        icon: {
                            name: "delete",
                            fontFamily: 'Material Symbols Outlined',
                            iconBrand: 'MATERIAL_ICONS',
                        }
                    },                                
                ]}
            />
        </div>
    )
}

export default ActionMenuExample