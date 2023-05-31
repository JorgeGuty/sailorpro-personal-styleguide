import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    dateTimeDropdown: {
        padding: 18,
        gap: 10
    },
    inputs: {
        flexDirection: 'row',
        marginBottom: 24
    },
    limit: {
        flex: 1,
        width: 2,
        backgroundColor: template.colors.lightestGray,
        marginHorizontal: 24
    }
});



export default styles