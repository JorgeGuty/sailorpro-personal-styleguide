import {StyleSheet} from 'react-native-web'
import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({
    dropdown: {
        minHeight: 50,
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: template.colors.background2,        
        borderRadius: 8,
        shadowRadius: template.shadows.shadow1.radius,
        shadowOpacity: template.shadows.shadow1.opacity,
        padding: 8,
    },
    options: {
        maxHeight: 211,
        paddingRight: 16,
        paddingBottom: 8,
        overflow: 'auto'
    },
    dropdownButtons: {
        flexDirection: 'row',
        gap: 12
    },
    dropdownButton: {
        flex: 1,
        height: 40,
        minWidth: 138,
        borderRadius: 8,
        borderWidth: 2,
        justifyContent: 'center'        
    },    
    transparentScreen: {
        position: "fixed", 
        top:0,
        left:0,
        right:0,
        bottom:0,
        background: "transparent",
        zIndex: 999
    }
});



export default styles