import React, {useState} from 'react'
import { Pressable, View } from 'react-native-web'

import styles from './SquareButton.style'

import { BodyRegular2 } from '../../../constants/fonts'

export const SquareButton = ({
    disabled,
    disabledStyle,
    selectedStyle,
    hoveredStyle,
    selected,
    onClick,

    children,
}) => {

    const [hovered, setHovered] = useState(false)

    return (
        disabled ?
            <View
                style={[styles.square, disabledStyle]}
            >
                <BodyRegular2
                    style={disabledStyle}
                >{children}</BodyRegular2>
            </View>
            :
            <Pressable
                style={[
                    styles.square,
                    selected ? selectedStyle : 
                    hovered ? hoveredStyle : 
                    null
                ]}
                onHoverIn={()=>setHovered(true)}
                onHoverOut={()=>setHovered(false)}
                onPress={onClick}            
            >
                <BodyRegular2
                    style={[
                        selected ? selectedStyle : 
                        hovered ? hoveredStyle : 
                        null
                    ]}
                >{children}</BodyRegular2>
            </Pressable>
    )
}
