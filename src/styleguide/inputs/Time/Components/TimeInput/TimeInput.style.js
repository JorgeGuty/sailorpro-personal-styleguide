import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    timeInput: {
        flexDirection: 'row',
        marginBottom: 8
    },
    selection: {
        flexDirection: 'row',
    },
    scrollableColumn: {
        flexDirection: 'column',
        maxHeight: 240,
        overflow: 'auto',
        marginRight: 8
    },
    title: {
        textAlign: 'initial',
        marginBottom: 10
    }
});

export default styles