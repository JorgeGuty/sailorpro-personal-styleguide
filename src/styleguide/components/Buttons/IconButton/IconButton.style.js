import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    
    small:{
        minHeight: 32,
        minWidth: 32,
    },
    default:{
        minHeight: 40,
        minWidth: 40,
    },
    smallIcon: {
        fontSize: 18
    }
});

export default styles