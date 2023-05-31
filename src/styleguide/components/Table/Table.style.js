import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    table: {
        flexDirection: 'row',
        width: 'min-content',
        maxWidth: '100%',
        overflow: 'auto',
        paddingHorizontal: 13,
        backgroundColor: template.colors.background2,
        borderRadius: 8,
        height: 'calc(100vh - 100px)'
    },
    wrapper: {
        borderRadius: 8,
        shadowRadius: template.shadows.shadow1.radius,
        shadowOpacity: template.shadows.shadow1.opacity,        
    },
    footer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 13,

    }

})

export default styles