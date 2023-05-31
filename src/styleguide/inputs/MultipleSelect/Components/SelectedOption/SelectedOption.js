import React from 'react'
import { View } from 'react-native-web'

import Icon from '../../../../components/Icon/Icon'

import styles from './SelectedOption.style'
import { default as iconStyles } from '../../../../components/Icon/Icon.style'
import { BodyRegular3, ButtonTextMedium } from '../../../../constants/fonts'

const SelectedOption = ({
    deselectThisOption,
    selectedOption,
}) => {
  return (
    <View
        style={styles.selectedOption}
    >
        <BodyRegular3
            style={styles.label}
        >{selectedOption.value}</BodyRegular3>
        <Icon
            fontFamily={"Material Symbols Outlined"}
            name={"close"}
            iconBrand = {'MATERIAL_ICONS'}
            style={[
                iconStyles.icon,
                iconStyles.grayIcon
            ]}      
            onClick={deselectThisOption}           
        />
    </View>
  )
}

export default SelectedOption