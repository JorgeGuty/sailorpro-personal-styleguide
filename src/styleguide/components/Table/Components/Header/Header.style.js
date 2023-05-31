import {StyleSheet} from 'react-native-web'
import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({
    header: {
        paddingBottom: 16,
        alignItems: 'flex-start',
        gap: 10,
        width: '100%',
        paddingRight: 24,
        paddingTop: 13,
        position: 'sticky',
        top: 0,
        bottom: 0,
        backgroundColor: template.colors.background2,
        zIndex: 5,
        borderBottomColor: template.colors.lightGray,
        borderBottomWidth: 1,
    }
});



export default styles