import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    dateDropdown: {
        padding: 18,
        gap: 10
    }
});



export default styles