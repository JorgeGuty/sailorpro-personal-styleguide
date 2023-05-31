import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: template.colors.background1,
        borderRadius: 8,
        alignContent: 'center',
        flexWrap: 'wrap',
        userSelect: 'none',
        userDrag: 'none',
        flex: 1,
    }
});



export default styles