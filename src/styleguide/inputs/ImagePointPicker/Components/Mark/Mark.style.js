import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    mark: {
        position: 'absolute',
        zIndex: 'auto',
        fontSize: 20,
    },
    markDropdown: {
        top: 24
    },
    deleteConfirmation: {
        flexDirection: 'row',
        gap: 8
    }
});



export default styles