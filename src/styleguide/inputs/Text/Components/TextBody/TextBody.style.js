import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    textBody: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        gap: 10,
        zIndex: 'auto'
    },  
});



export default styles