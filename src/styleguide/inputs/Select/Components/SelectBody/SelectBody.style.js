import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    textValue: {
        color: 'inherit',
        fontSize: 14,
        fontFamily: 'Figtree',
        alignSelf: 'center'
    },
    input: {
        justifyContent: 'space-between',
        //width: '100%',
        // flexDirection: 'row',
        // alignSelf: 'center',
    }
});



export default styles