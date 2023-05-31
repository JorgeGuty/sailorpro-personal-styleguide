import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    defaultTextContent: {
        minWidth: 100
    },
    smallTextContent: {
        minWidth: 85   
    }
});

export default styles