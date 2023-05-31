import React, { useState } from 'react'
import {View, Text } from 'react-native-web'
import styles from './Icon.style'
import { BodyRegular2, BodyRegular3 } from '../../constants/fonts'

/**
 * General icon component
 * @param {string} iconBrand  - icon provider identifier. eg. 'MATERIAL_ICONS'
 * @param {string} fontFamily - Specific font family to be placed in the text component. eg. 'Material Symbols Outlined'
 * @param {string} name - Name of the icon inside the icon provider. eg. 'upward_arrow'
 * @param {Object} style - StyleSheet object
 * @param {Function} onClick - OnClick action to be added to the icon
 * @param {string} description - Description to be added to the icon, @todo appears on hover 
 * */
const Icon = ({iconBrand, fontFamily, name, style, onClick, description,}) => {

    const [hovered, setHovered] = useState(false)

    const materialIcons = require('../../constants/materialIcons')
    const unicode = iconBrand === 'MATERIAL_ICONS' ? materialIcons[name] : null

    return (
        <View
            onClick={(event) => {                
                if(onClick) {
                    event.stopPropagation() // NOT COMPATIBLE WITH REACT NATIVE
                    onClick()
                }
            }}           
            style={[
                styles.wrapper,
                description || onClick ? styles.pointerCursor : null
            ]}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Text style={[style, {fontFamily: fontFamily} ]}>{unicode}</Text>
            {
                description ?
                (
                    hovered &&
                    <View
                        style={styles.descriptionBox}
                    >
                        <BodyRegular3>{description}</BodyRegular3>
                    </View>
                )
                :
                null
            }
        </View>        
    )
}

export default Icon