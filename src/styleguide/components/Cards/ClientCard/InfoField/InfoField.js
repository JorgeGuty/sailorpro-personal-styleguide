import React from 'react'
import Icon from '../../../Icon/Icon'
import { View } from 'react-native-web'
import { BodyRegular2 } from '../../../../constants/fonts'

import styles from '../ClientCard.style'

const InfoField = ({
    icon,
    text,
}) => {
  return (
    <View
        style={styles.infoField}
    >
        <Icon
            fontFamily = {icon.fontFamily}
            name = {icon.name}
            iconBrand = {icon.iconBrand}                
            style={styles.infoFieldIcon}             
        />
        <BodyRegular2>{text}</BodyRegular2>
    </View>
  )
}

export default InfoField