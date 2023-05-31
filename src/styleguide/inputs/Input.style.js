import {StyleSheet} from 'react-native-web'

import getTemplate from '../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    default: {
        borderColor: template.colors.lightGray,
        color: template.colors.mediumGray
    },
    focus: {        
        borderColor: template.colors.main,
        color: template.colors.mainText
    },
    disabled: {
        backgroundColor: template.colors.lightestGray,
        borderColor: template.colors.mediumGray,
        color: template.colors.mediumGray
    },
    filled: {
        borderColor: template.colors.mediumGray,
    },
    error: {
        borderColor: template.colors.error,
    },
    input: {
        fontFamily: 'Figtree',
        fontSize: 14,
        outlineWidth: 0,
        flex: 1,
        alignSelf: 'center',
        color: 'inherit',
        minWidth: 0,
        flexDirection: 'row',    
        minHeight: 20,
        paddingVertical: 5,
        zIndex: 'auto',
        // borderWidth: 1
    },
    errorMessage: {
        color: template.colors.error
    },
    text: {
        color: template.colors.mediumGray,
        fontSize: 14,
        fontFamily: 'Figtree',
        alignSelf: 'center'
    },
    spInput: {
        flexDirection: 'column',
        textAlign: 'initial',
        flex: 1,
        // marginBottom: 12,
        gap: 5,
        width: 'inherit',
        zIndex: 'auto',
    },
    body: { 
        borderRadius: 8,
        borderWidth: 2,        
        flexDirection: 'row',
        alignContent: 'center',    
        paddingHorizontal: 12,
        gap: 10,
        zIndex: 'auto',
    },
    noHorizontalPadding: {
        paddingHorizontal: 0,
    },
    defaultBodyHeight: {
        height: 29,
    },
    bigBodyHeight: {
        height: 115,
    },
    highlighted: {
        color: template.colors.contrastTextMain,
        backgroundColor: template.colors.main,
        borderColor: template.colors.main,
    },
    onHoverClickable: {
        backgroundColor: template.colors.hover1,
        borderColor: template.colors.hover1,
        color: template.colors.textMain,
        fontWeight: 600
    },
    button: {
        flex: 1,
        height: 40,
        borderRadius: 8,
        borderWidth: 2,
        justifyContent: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    square: {
        height: 39,
        width: 39,
        justifyContent: 'center',
        borderRadius: 8
    },
    dropdownInput: {
        zIndex: 'auto',
        flex: 1
    },
    inputDropdown: {
        top: 82
    }
});

export default styles