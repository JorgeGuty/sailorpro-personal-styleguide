import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    routeLinks: {
        flexDirection: 'row',
        width: 'fit-content',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    currentPositionTitle: {
        width: 'max-content',
    },
    divisionArrow: {
        fontSize: 20,
        color: template.colors.mediumGray,
    },
})

export default styles