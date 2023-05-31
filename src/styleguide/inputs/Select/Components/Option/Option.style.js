import {StyleSheet} from 'react-native-web'
import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontFamily: 'Figtree',
        alignSelf: 'center',
        color: template.colors.mainText
    },
    option: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 8,
        height: 39,
        fontWeight: 400,
        display: 'flex',
        justifyCcontent: 'flex-start',
        flexDirection: 'row',
    },
    hovered: {
        backgroundColor: template.colors.hover1,
        fontWeight: 600
    },
    selected: {
        backgroundColor: template.colors.variant2,
        fontWeight: 600
    }
});



export default styles