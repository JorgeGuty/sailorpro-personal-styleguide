import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    timeDropdown: {
        padding: 18,
        gap: 10,
        // height: 334,
        // overflow: 'auto'
    }
});



export default styles