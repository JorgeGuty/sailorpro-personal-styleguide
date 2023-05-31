import {StyleSheet} from 'react-native-web'
import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({
    column: {
        minWidth: 'max-content',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 'fit-content',
    },
    firstColumn: {
        // position: 'sticky',
        // left: 0,
        // zIndex: 20,
        // backgroundColor: template.colors.background2,
    }
});



export default styles