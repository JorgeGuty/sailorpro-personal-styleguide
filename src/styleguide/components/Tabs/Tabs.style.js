import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    tabsContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 4,
        borderRadius: 8,
        shadowRadius: template.shadows.shadow1.radius,
        shadowOpacity: template.shadows.shadow1.opacity,
        backgroundColor: template.colors.background2,     
    },
    stickyTabsContainer: {
        position: 'sticky',
        zIndex: 20,
    }
})

export default styles