import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    list: {
        flex: 0.2,
        maxWidth: 56
    }
});



export default styles