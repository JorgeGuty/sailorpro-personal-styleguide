import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({     
    card: {
        flex: 1,
        width: 'max-content',
        backgroundColor: template.colors.background2,
        borderRadius: 8,
        shadowRadius: template.shadows.shadow1.radius,
        shadowOpacity: template.shadows.shadow1.opacity,
        flexWrap: 'wrap',
        overflow: 'auto',
        paddingVertical: 35,
        paddingHorizontal: 16,
        height: 180,
        gap: 10,
    },
    infoField: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    label: {
        width: 100,
        textAlign: 'right',
        justifyContent: 'center',
    },
    value: {
        maxWidth: 200
    }
});

export default styles