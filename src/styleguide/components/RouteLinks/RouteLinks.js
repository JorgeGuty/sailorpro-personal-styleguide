import React from 'react'
import { View } from 'react-native-web'
import styles from './RouteLinks.style'
import Link from './Link/Link'
import Icon from '../Icon/Icon'
import { BodyBold2 } from '../../constants/fonts'

const RouteLinks = ({
    links,
    currentPositionTitle
}) => {

    const renderRouteLinks = () => {
        return links.map((link, index) => {
            return (                
                <View
                    style={styles.routeLinks}
                    key={index}
                >
                    <Link                
                        text={link.text}
                        navigateToDestination={link.navigateToDestination}
                    />
                    <Icon
                        iconBrand={'MATERIAL_ICONS'}
                        fontFamily={'Material Symbols Outlined'}
                        name={'chevron_right'}
                        style={styles.divisionArrow}
                    />
                </View>

            )
        })
    }

    return (
        <View
            style={styles.routeLinks}
        >
            {
                renderRouteLinks()
            }
            <BodyBold2
                style={styles.currentPositionTitle}
            >
                {currentPositionTitle}
            </BodyBold2>
        </View>
    )
}

export default RouteLinks