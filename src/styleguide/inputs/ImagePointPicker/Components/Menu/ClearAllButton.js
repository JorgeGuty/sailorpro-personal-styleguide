import React, {useState} from 'react'
import {View} from  'react-native-web'

import Icon from '../../../../components/Icon/Icon'

import styles from './Menu.style'
import {default as iconStyles} from '../../../../components/Icon/Icon.style'

export const ClearAllButton = ({
    clearAll
}) => {
    
    const [hovered, setHovered] = useState(false)
  
    return (
        <View
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}            
            style={styles.optionWrapper}  
        >
            <Icon
                fontFamily={'Material Symbols Outlined'}
                name={'delete'}
                iconBrand = {'MATERIAL_ICONS'}
                onClick={clearAll}
                style={[
                    styles.borderTop,
                    iconStyles.bigIcon,
                    iconStyles.grayIcon,                    
                    styles.option,
                    hovered ? styles.hoveredOption : null
                ]}   
            />
        </View>
    )
}
