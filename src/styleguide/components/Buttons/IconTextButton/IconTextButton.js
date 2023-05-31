import React from 'react'

import { ButtonTextMedium, ButtonTextSmall } from '../../../constants/fonts'
import { SPButton } from '../Button'
import Icon from '../../Icon/Icon'

import { default as iconStyles } from '../../Icon/Icon.style'
import {styles as ButtonStyles} from '../ButtonStyles'
import styles from './IconTextButton.style'

/**
 * SP Icon with Text Button component
 * @param {Function} props.onClick - Function to be executed on click
 * @param {string} props.style - String between [PRIMARY, SECONDARY, TERTIARY]
 * @param {boolean} props.small - render small
 * @param {boolean} props.truncated - adjust width to container or truncate it to fit content
 * @param {boolean} props.disabled - Wether or not its disabled
 * @param {Object} props.icon - Icon object that specifies the icon to be placed.
 * @param {string} props.icon.name - Name of the icon
 * @param {string} props.icon.fontFamily - Font family inside an icon brand (Variations)
 * @param {string} props.icon.iconBrand - Icon provider: [MATERIAL_ICONS, FONT_AWESOME, BRANDS_FA, FLAGS]
 * @param {boolean} props.placeIconRight - If true, icon appears on the right. Otherwise on the left
 * @param {string} props.text - Text content of the button
 */
export const IconTextButton = ({
    onClick,
    style,
    icon,
    placeIconRight,
    text,
    small,
    truncated,
    disabled
}) => {
    
    const renderIcon = () => {
        return (
            <Icon
                fontFamily = {icon.fontFamily}
                name = {icon.name}
                iconBrand = {icon.iconBrand}                
                style={[
                    small ? iconStyles.icon : iconStyles.bigIcon,
                    iconStyles.textIcon,
                    ButtonStyles.content
                ]}  
            />
        )     
    }

    return (
        <SPButton
            onClick={onClick}
            style={style}
            small={small}
            truncated={truncated}
            disabled={disabled}
        >
            {
                icon && !placeIconRight ?
                renderIcon()       
                :   
                null  
            }
            {
                small ? 
                <ButtonTextSmall
                    style={[ButtonStyles.content, styles.smallTextContent]}
                >{text}</ButtonTextSmall> 
                : 
                <ButtonTextMedium
                style={[ButtonStyles.content, styles.defaultTextContent]}
                >{text}</ButtonTextMedium>
            }
            {
                icon && placeIconRight ?
                renderIcon()       
                :   
                null   
            }        
        </SPButton>
    )
}
