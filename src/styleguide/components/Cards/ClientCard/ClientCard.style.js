import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({     
    card: {
        flexDirection: 'row',
        gap: 16,
        backgroundColor: template.colors.background2,
        borderRadius: 8,
        width: 350,
        height: 'max-content',
        alignItems: 'center',
        shadowRadius: template.shadows.shadow1.radius,
        shadowOpacity: template.shadows.shadow1.opacity,        
        paddingRight: 16,
        height: 180,
    },
    colorBar: {
        width: 4,
        backgroundColor: template.colors.main,
        height: 60,
    },
    body: {
        flexDirection: 'column',
        gap: 10,
    },
    infoField: {
        flexDirection: 'row',
        gap: 6,
    },
    clientType: {
        color: template.colors.mediumGray,
        marginBottom: 3,
        fontWeight: 500,
    },

    infoFieldIcon: {

    },
});

export default styles