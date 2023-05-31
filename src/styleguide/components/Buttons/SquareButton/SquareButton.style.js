import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    square: {
        height: 39,
        width: 39,
        justifyContent: 'center',
        borderRadius: 8
    }
});

export default styles