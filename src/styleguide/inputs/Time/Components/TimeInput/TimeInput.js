import React, { useEffect, useState } from 'react'
import { View } from 'react-native-web'
import styles from './TimeInput.style'
import { getPeriod } from '../../../../managers/dateManager'
import { ValueSquare } from './ValueSquare/ValueSquare'
import { BodyRegular2 } from '../../../../constants/fonts'
import { useTranslation } from 'react-i18next'

export const TimeInput = ({
  clickedHour,
  setClickedHour,
  clickedMinutes,
  setClickedMinutes,
  clickedPeriod,
  setClickedPeriod
}) => {

  const { t } = useTranslation()
  

  const renderHours = () => {
    return (
      <>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => {
            return (
              <ValueSquare
                key={value}
                value={value}
                clickedValue={clickedHour}
                setClickedValue={setClickedHour}
              />
            )
          })
        }
      </>
    )
  }

  const renderMinutes = () => {
    return (
      <>
        {
          [...Array(60).keys()].map((value) => {
            return (
              <ValueSquare
                key={value}
                value={value}
                clickedValue={clickedMinutes}
                setClickedValue={setClickedMinutes}
              />
            )
          })
        }
      </>
    )
  }

  const renderPeriods = () => {
    return (
      <>
        {
          ['AM', 'PM'].map((value) => {
            return (
              <ValueSquare
                key={value}
                value={value}
                clickedValue={clickedPeriod}
                setClickedValue={setClickedPeriod}
              />
            )
          })
        }
      </>
    )
  }

  return (
    <View
      styles={styles.body}
    >

      <BodyRegular2
        style={styles.title}
      >{t("SELECT_TIME")}</BodyRegular2>
      <View
        style={styles.timeInput}      
      >
        <View
          style={styles.selection}
        >
          <View
            style={styles.scrollableColumn}
          >
            {
              renderHours()
            }     
          </View>
          <View
            style={styles.scrollableColumn}
          >
            {
              renderMinutes()
            }   
          </View>
        </View>
        <View
          style={styles.selection}
        >
          {
            renderPeriods()
          }
        </View>
      </View>
    </View>
  )
}
