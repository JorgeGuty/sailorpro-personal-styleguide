import React, {useState, useEffect} from 'react'
import {Pressable} from 'react-native-web'

import {styles as ButtonStyles, getStyleClasses, getDynamicStyle} from './ButtonStyles'

/**
 * SP Button component
 * @param {Function} props.onClick - Function to be executed on click
 * @param {string} props.style - String between [PRIMARY, SECONDARY, TERTIARY]
 * @param {boolean} props.small - render small
 * @param {boolean} props.truncated - adjust width to container or truncate it to fit content
 * @param {boolean} props.disabled - Wether or not its disabled
 * @param {React.Component} props.children - content of the button
 */
export const SPButton = ({
    onClick,
    style,
    small,
    truncated,
    disabled,
    children,
    styling
}) => {

    const styleClasses = getStyleClasses(style)

    const [hovered, setHovered] = useState(false)
    const [selected, setSelected] = useState(false)

    const [dynamicStyle, setDynamicStyle] = useState(ButtonStyles[styleClasses.default])

    useEffect(() => {
        setDynamicStyle(getDynamicStyle(styleClasses, disabled, selected, hovered))
    }, [disabled, hovered, selected, style])

    return (
        <Pressable
            style={[
                small ? ButtonStyles.small : ButtonStyles.default,
                ButtonStyles.button, 
                truncated ? ButtonStyles.truncated : ButtonStyles.fullWidth,
                dynamicStyle,
                styling
            ]}
            onPress={onClick}
            disabled={disabled}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            onPressIn={() => setSelected(true)}
            onPressOut={() => setSelected(false)}
        >
            {children}       
        </Pressable>
    )
}
