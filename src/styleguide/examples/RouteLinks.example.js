import React from 'react'
import Link from '../components/RouteLinks/Link/Link'
import RouteLinks from '../components/RouteLinks/RouteLinks'
const RouteLinksExample = () => {

    const links = [
        {
            text: 'Expedientes',
            navigateToDestination: () => console.log('Navigating to destination...')
        },
        {
            text: 'Lista Expediente A',
            navigateToDestination: () => console.log('Navigating to destination...')
        },
        {
            text: 'Leslie Alexander',
            navigateToDestination: () => console.log('Navigating to destination...')
        },                
    ]

    return (
        <div>        

        </div>
    )
}

export default RouteLinksExample