import {StyleSheet} from 'react-native-web'

import getTemplate from '../../../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({ 
    calendar: {
        flexDirection: 'column',
        gap: 10,
        alignContent: 'center'
    },
    days: {
        flexDirection: 'column',
        marginHorizontal: 8,
        marginVertical: 10
    },
    week: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    dayNameText: {
        height: 39,
        width: 39,
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        display: 'flex',
        color: template.colors.textMain
    },
    separatedContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap'
    },
    buttons: {
        flexDirection: 'row'
    },
    monthLabel: {
        alignSelf: 'center'
    },
    mainColorTextButton: {
        color: template.colors.main,
        cursor: 'pointer'
    },
    title: {
        textAlign: 'initial',
        marginBottom: 10
    }
});



export default styles