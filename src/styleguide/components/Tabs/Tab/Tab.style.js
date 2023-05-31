import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    tab: {
        borderRadius: 8,
        height: 30,
        paddingHorizontal: 18,
        // paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        width: 100,
        color: template.colors.mediumGray,
        textAlign: 'center'
    },
    selectedTab:{
        backgroundColor: template.colors.main
    },
    selectedTabLabel: {
        color: template.colors.contrastTextMain
    }
})

export default styles