import React from 'react'
import { View } from 'react-native-web'
import styles from './InfoCard.style'
import { BodyBold2, BodyRegular2 } from '../../../constants/fonts'

import { useHorizontalScroll } from '../../../customHooks/useHorizontalScroll'

const InfoCard = ({
  labeledInformation,
}) => {

  const scrollRef = useHorizontalScroll();

  const renderLabeledInformation = () => {
    return labeledInformation.map((field, index) => {
      return (
        <View
          style={styles.infoField}
          key={index}
        >
          <BodyRegular2 style={styles.label}>{`${field.label}: `}</BodyRegular2>
          <BodyRegular2 style={styles.value}>{field.value}</BodyRegular2>
        </View>
      )
    })
  }

  return (
    <View
      style={styles.card}
      ref={scrollRef}
    >
      {
        renderLabeledInformation()
      }
    </View>
  )
}

export default InfoCard