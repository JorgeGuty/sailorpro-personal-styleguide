import React, {useState, useEffect} from 'react'
import {Pressable} from 'react-native-web'

import { ButtonTextMedium, ButtonTextSmall } from '../../../constants/fonts'
import Icon from '../../Icon/Icon'
import { SPButton } from '../Button'

import {styles as ButtonStyles, getStyleClasses, getDynamicStyle} from '../ButtonStyles'
import styles from './TextButton.style'

/**
 * SP Text Button component
 * @param {Function} props.onClick - Function to be executed on click
 * @param {string} props.style - String between [PRIMARY, SECONDARY, TERTIARY]
 * @param {boolean} props.small - render small
 * @param {boolean} props.truncated - adjust width to container or truncate it to fit content
 * @param {boolean} props.disabled - Wether or not its disabled
 * @param {string} props.text - Text content of the button
 * @param {Object} props.styling - Further styling for the button
 */
export const TextButton = ({
    onClick,
    style,
    styling,
    small,
    truncated,
    disabled,
    children,
}) => {

  return (
    <SPButton
        onClick={onClick}
        style={style}
        small={small}
        truncated={truncated}
        disabled={disabled}
        styling={styling}
    >
        {
            small ? 
            <ButtonTextSmall
                style={[ButtonStyles.content, styles.smallTextContent]}
            >{children}</ButtonTextSmall> 
            : 
            <ButtonTextMedium
            style={[ButtonStyles.content, styles.defaultTextContent]}
            >{children}</ButtonTextMedium>
        }
    </SPButton>
  )
}
