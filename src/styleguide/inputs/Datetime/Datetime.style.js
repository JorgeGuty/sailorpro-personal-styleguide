import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    textValue: {
        color: 'inherit',
        fontSize: 14,
        fontFamily: 'Figtree',
        alignSelf: 'center'
    },
    values: {
        flexDirection: 'row',
        gap: 8
    }
});



export default styles