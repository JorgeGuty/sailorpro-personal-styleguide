import React, {useState} from 'react'
import {View} from  'react-native-web'

import Icon from '../../../../components/Icon/Icon'

import styles from './Menu.style'

export const MarkOption = ({
    mark,
    selectThisMark
}) => {
    
    const [hovered, setHovered] = useState(false)
  
    return (
        <View
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={styles.optionWrapper}            
        >
            <Icon
                fontFamily={mark.icon.fontFamily}
                name={mark.icon.name}
                iconBrand = {mark.icon.iconBrand}
                onClick={selectThisMark}
                description={mark.description}
                style={[
                    {
                        color: mark.color,
                    },
                    styles.option,
                    hovered ? styles.hoveredOption : null
                ]}   
            />
        </View>
    )
}
 