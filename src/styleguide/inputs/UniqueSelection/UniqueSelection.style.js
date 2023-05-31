import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    options: {
        marginVertical: 18,
        maxHeight: 'calc(100vh - 200px)', // NOT COMPATIBLE WITH REACT NATIVE
        overflow: 'auto',
        flexWrap: 'wrap',
        flex: 1,
        gap: 8
    },
    horizontalDisplay: {
        flexDirection: 'row'
    },
    verticalDisplay: {
        flexDirection: 'column'
    },    
    clearSelectionButton: {
        position: 'absolute',
        right: 5,
        bottom: 5
    },
    
});

export default styles