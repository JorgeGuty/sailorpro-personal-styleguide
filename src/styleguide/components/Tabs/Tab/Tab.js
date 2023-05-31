import React from 'react'
import { Pressable } from 'react-native-web'
import styles from './Tab.style'
import { ButtonTextMini, ButtonTextSmall } from '../../../constants/fonts'

const Tab = ({
    label,
    selectThisTab,
    selectedTabIndex,
    index,
}) => {
  return (
    <Pressable
        style={[styles.tab, selectedTabIndex === index ? styles.selectedTab : null]}
        onPress={selectThisTab}
    >
        <ButtonTextSmall
            style={[styles.label, selectedTabIndex === index ? styles.selectedTabLabel : null]}
        >{label}</ButtonTextSmall>
    </Pressable>
  )
}

export default Tab