import React, { useState } from 'react'

import styles from './FloatingButton.style'
import { Pressable, View } from 'react-native-web'
import Icon from '../../Icon/Icon'
import { Label } from '../../../constants/fonts'

const FloatingButton = ({
    text,
    onClick,
    icon,
}) => {

    const [hovered, setHovered] = useState(false)

    return (
        <Pressable
            onPress={onClick}
            // onPress={() => setHovered(!hovered)}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={styles.button}
        >
            <Icon
                name={ icon.name }
                iconBrand={ icon.iconBrand }
                fontFamily={ icon.fontFamily }
                style={ [styles.icon, hovered ? styles.hoveredIcon : styles.stillIcon] }                
            />
            {
                hovered ? 
                    <Label style={styles.text}>{text}</Label>
                :   null
            }
        </Pressable>
    )
    
}

export default FloatingButton