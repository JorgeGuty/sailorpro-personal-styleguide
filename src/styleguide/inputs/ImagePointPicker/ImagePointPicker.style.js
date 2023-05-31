import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    image: {
        cursor: 'pointer',
    },
    imagePointPicker: {
        flex: 1,
        cursor:'default',
        zIndex: 'auto',
    },
    disabledScreen: {
        position: "absolute", 
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor: template.colors.mediumGray,
        opacity: .5,
        zIndex: 100
    }
});



export default styles