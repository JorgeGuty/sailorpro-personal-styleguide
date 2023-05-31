import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    defaultTextContent: {
        minWidth: 70
    },
    smallTextContent: {
        minWidth: 56   
    }    
});

export default styles