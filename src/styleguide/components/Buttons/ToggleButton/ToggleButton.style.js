import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    disabled: {
        color: template.colors.mediumGray
    },
    onFocused: {
        color: template.colors.main
    },
    onBlured: {
        color: template.colors.highlight1
    },    
    off: {
        color: template.colors.mediumGray
    },
    toggle: {
        fontSize: 24
    }
});

export default styles