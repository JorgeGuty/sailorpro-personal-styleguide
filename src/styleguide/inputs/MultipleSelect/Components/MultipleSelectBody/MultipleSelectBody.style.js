import {StyleSheet} from 'react-native-web'
import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({
    selectedOptionsList: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
        flexWrap: 'wrap',
        height: 'min-content'
    },
    input: {
        justifyContent: 'space-between',
        height: 'min-content'
    },
    textValue: {
        color: 'inherit',
        fontSize: 14,
        fontFamily: 'Figtree',
        alignSelf: 'center'
    },
});



export default styles