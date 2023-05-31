import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    optionsLeftLabel: {
        textAlign: 'initial'
    },
});

export default styles