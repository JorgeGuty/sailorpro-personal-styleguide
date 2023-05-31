import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({     
    icon: {
        color: template.colors.main,
    },    
    hoveredIcon: {
        fontSize: 22,
    },
    stillIcon: {
        fontSize: 18,
    },
    text: {
        color: template.colors.mediumGray,
        fontSize: 12,    
        width: 'max-content',
    },
    button: {
        flexDirection: 'column',
        gap: 7.5,        
        flexWrap: 'wrap',
        width: 50,
        height: 55,
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
    }
});

export default styles