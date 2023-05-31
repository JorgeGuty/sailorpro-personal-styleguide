import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({     
    link: {
        width: 'max-content',        
    },
    hoveredLinkText: {
        color: template.colors.lightGray,
        fontWeight: 500
    },
    linkText: {
        color: template.colors.mediumGray,
        fontWeight: 500
    }
});

export default styles