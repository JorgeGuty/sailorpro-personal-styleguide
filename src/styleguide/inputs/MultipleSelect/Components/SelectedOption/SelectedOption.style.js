import {StyleSheet} from 'react-native-web'
import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({
    selectedOption: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        backgroundColor: template.colors.hover1,
        flexDirection: 'row',
        alignContent: 'center',
    },
    label: {
        display: 'flex',
        alignContent:'center',
        flexWrap: 'wrap'
    }
});



export default styles