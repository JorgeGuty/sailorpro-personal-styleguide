import {StyleSheet} from 'react-native-web'
import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({
    record: {
        width: '100%',
        borderBottomColor: template.colors.lightGray,
        borderBottomWidth: 1,
        alignItems: 'flex-start',
        justifyItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingRight: 24        
    },
    hoveredRecord: {
        backgroundColor: template.colors.lightestGray
    }
});



export default styles