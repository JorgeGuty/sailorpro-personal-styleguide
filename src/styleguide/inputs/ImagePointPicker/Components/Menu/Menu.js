import React, {useState, useEffect} from 'react'
import { View } from 'react-native-web'

import Icon from '../../../../components/Icon/Icon'
import { MarkOption } from './MarkOption'
import { ClearAllButton } from './ClearAllButton'

import styles from './Menu.style'

export const Menu = ({
    markOptions,
    selectedMark,
    setSelectedMark,
    clearAllMarks,
}) => {

    const [hovered, setHovered] = useState(false)

    const renderMarkOptions = () => {
        return markOptions.map((mark, index) => {
            return (
                <MarkOption
                    key={index}
                    mark={mark}
                    selectThisMark={() => setSelectedMark(mark)}
                />
            )
        })
    }

    return (
        <View
            style={[
                styles.menu,
                hovered ? styles.hovered : null
            ]}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Icon
                fontFamily={selectedMark.icon.fontFamily}
                name={selectedMark.icon.name}
                iconBrand = {selectedMark.icon.iconBrand}
                style={[
                    {                                                                
                        color: selectedMark.color,                    
                        fontSize: 30,
                        margin: 5,
                        borderRadius: 15
                    }
                ]}   
            />
            <View
                style={[styles.options, styles.borderTop]}
            >
                {
                    renderMarkOptions()
                }
                <ClearAllButton
                    clearAll={clearAllMarks}
                />                
            </View>
        </View>
    )
}
