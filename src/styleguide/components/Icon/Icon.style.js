import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        userSelect: 'none',
        zIndex: 'auto'
    },
    icon: {
        fontSize: 16,
        alignSelf: 'center',        
    },
    bigIcon: {
        fontSize: 24,
        alignSelf: 'center',
    },
    grayIcon: {
        color: template.colors.mediumGray,
    },
    errorIcon: {        
        color: template.colors.error 
    },
    textIcon: {
        color: template.colors.mainText        
    },
    pointerCursor: {
        cursor: 'pointer',
    },
    descriptionBox: {
        position: 'absolute',
        zIndex: 1000,
        top: 35,
        backgroundColor: template.colors.background2,        
        borderRadius: 8,
        shadowRadius: template.shadows.shadow1.radius,
        shadowOpacity: template.shadows.shadow1.opacity,
        padding: 8,
        minWidth: 200,
        textAlign: 'justify',
        maxHeight: 400,
        overflow: 'auto'
    },    
});


export default styles