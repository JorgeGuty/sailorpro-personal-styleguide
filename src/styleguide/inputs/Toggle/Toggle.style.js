import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 12
    },
    disabled: {
        color: template.colors.mediumGray
    }    
});



export default styles