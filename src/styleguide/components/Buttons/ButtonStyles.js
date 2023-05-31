import { StyleSheet } from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

export const styles = StyleSheet.create({ 
    primaryDefault: {
        color: template.colors.contrastTextMain,
        backgroundColor: template.colors.main,
        borderColor: template.colors.main
    },
    primaryHover: {
        color: template.colors.contrastTextMain,
        backgroundColor: template.colors.variant1,
        borderColor: template.colors.variant1
    },
    primarySelected: {
        color: template.colors.contrastTextMain,
        backgroundColor: template.colors.highlight1,
        borderColor: template.colors.highlight1
    },
    primaryDisabled: {
        color: template.colors.mediumGray,
        backgroundColor: template.colors.lightGray,
        borderColor: template.colors.lightGray
    },

    secondaryDefault: {
        color: template.colors.main,
        backgroundColor: 'transparent',
        borderColor: template.colors.main
    },
    secondaryHover: {
        color: template.colors.contrastTextMain,
        backgroundColor: template.colors.variant2,
        borderColor: template.colors.variant2
    },
    secondarySelected: {
        color: template.colors.highlight1,
        backgroundColor: 'transparent',
        borderColor: template.colors.highlight1
    },
    secondaryDisabled: {
        color: template.colors.mediumGray,
         backgroundColor: 'transparent',
        borderColor: template.colors.mediumGray
    },

    tertiaryDefault: {
        color: template.colors.main,
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
    tertiaryHover: {
        color: template.colors.variant1,
        backgroundColor: template.colors.hover1,
        borderColor: 'transparent'
    },
    tertiarySelected: {
        color: template.colors.highlight1,
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
    tertiaryDisabled: {
        color: template.colors.mediumGray,
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
    button: {
        borderRadius: 8,
        borderWidth: 2,
        flexDirection: 'row',
        gap: 14,        
        justifyContent: 'center',
        alignItems: 'center'
    },
    small: {
        paddingVertical: 6,
        paddingHorizontal: 10,   
        height: 32,
        maxHeight: 32
    },
    default: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        height: 40,
        maxHeight: 40
    },
    truncated: {
        width: 'fit-content',
    },
    fullWidth: {
        flex: 1,
    },
    content: {
        color: 'inherit',
        textAlign: 'center'
    }
});

export const getStyleClasses = (buttonMode) => {
    const styleClass = 
    buttonMode === 'SECONDARY' ? 
    {
        default: 'secondaryDefault',
        hover: 'secondaryHover',
        selected: 'secondarySelected',
        disabled: 'secondaryDisabled'
    } 
    : buttonMode === 'TERTIARY' ? 
    {
        default: 'tertiaryDefault',
        hover: 'tertiaryHover',
        selected: 'tertiarySelected',
        disabled: 'tertiaryDisabled'
    } 
    : 
    {
        default: 'primaryDefault',
        hover: 'primaryHover',
        selected: 'primarySelected',
        disabled: 'primaryDisabled'
    }

    return styleClass
}

export const getDynamicStyle = (styleClasses, disabled, selected, hovered) => {
    const dynamicStyle = 
        disabled ? styles[styleClasses.disabled] 
        : 
        selected ? styles[styleClasses.selected] 
        : 
        hovered ? styles[styleClasses.hover] 
        : 
        styles[styleClasses.default]
    return dynamicStyle
}