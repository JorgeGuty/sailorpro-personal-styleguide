import {StyleSheet} from 'react-native-web'
import {default as globalStyles} from '../../../Input.style';
import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({
    dropdown: {
        gap: 8
    },
    options: {
        maxHeight: 211,
        paddingRight: 16,
        paddingBottom: 8,
        overflow: 'auto'
    }
});



export default styles