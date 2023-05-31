import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    menu: {
        height: 40,
        width: 40,
        backgroundColor: template.colors.background2,
        position: 'absolute',
        top: 15,
        left: 15,
        borderRadius: 20,
        shadowRadius: template.shadows.shadow1.radius,
        shadowOpacity: template.shadows.shadow1.opacity,
        justifyContent: 'flex-start',
        overflow: 'hidden',
        zIndex: 'auto'
        // padding: 5 
    },
    hovered: {
        height: 'fit-content',
        overflow: 'show',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 8,
    },
    options: {
        flexDirection: 'column',
        zIndex: 'auto'
    },
    optionWrapper: {
        alignSelf: 'center',
        zIndex: 'auto'
    },
    option: {                                                                                                
        padding: 5,
        borderRadius: 4,
        fontSize: 25,
        width: '100%',
        zIndex: 'auto'
    },
    hoveredOption: {
        backgroundColor: template.colors.hover1,
        cursor: 'pointer'
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: template.colors.lightestGray
    }
})

export default styles