import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    input: {
        height: 115,
        borderRadius: 8,
        borderWidth: 0,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 5
    },
    charsLeftLabel: {
        textAlign: 'initial'
    },
    body: {
        flexDirection: 'column',
        // marginBottom: 16
    }
});



export default styles