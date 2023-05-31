import React from 'react'

import Icon from '../../Icon/Icon'
import {styles as ButtonStyles} from '../ButtonStyles'
import { default as iconStyles } from '../../Icon/Icon.style'
import { SPButton } from '../Button'

/**
 * SP Icon Button component
 * @param {Function} props.onClick - Function to be executed on click
 * @param {string} props.style - String between [PRIMARY, SECONDARY, TERTIARY]
 * @param {boolean} props.small - render small
 * @param {boolean} props.truncated - adjust width to container or truncate it to fit content
 * @param {boolean} props.disabled - Wether or not its disabled
 * @param {Object} props.icon - Icon object that specifies the icon to be placed.
 * @param {string} props.icon.name - Name of the icon
 * @param {string} props.icon.fontFamily - Font family inside an icon brand (Variations)
 * @param {string} props.icon.iconBrand - Icon provider: [MATERIAL_ICONS, FONT_AWESOME, BRANDS_FA, FLAGS]
 */
export const IconButton = ({
    icon,
    onClick,
    style,
    small,
    disabled,
    truncated 
}) => {

    return (
        <SPButton
            onClick={onClick}
            style={style}
            small={small}
            truncated={truncated}
            disabled={disabled}
        >
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
        </SPButton>
    )
}
