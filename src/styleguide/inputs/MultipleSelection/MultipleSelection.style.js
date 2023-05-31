import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    input: {
        height: 115,
        borderRadius: 8,
        borderWidth: 0,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 8
    },    
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
    optionsLeftLabel: {
        textAlign: 'initial'
    },
    body: {
        flexDirection: 'column',
        // marginBottom: 16
    },
    clearSelectionButton: {
        position: 'absolute',
        right: 5,
        bottom: 5
    }
});

export default styles