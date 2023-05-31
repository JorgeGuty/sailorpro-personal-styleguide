import {StyleSheet} from 'react-native-web'

import getTemplate from '../../managers/templateManager';

const template = getTemplate()

const styles = StyleSheet.create({     
    menu: {
        flexDirection: 'row',
        gap: 10,
        width: 'min-content',
    }
});

export default styles