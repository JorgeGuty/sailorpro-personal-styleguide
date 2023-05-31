import React, { useState } from 'react'
import { View } from 'react-native-web'
import { DaySquare } from './DaySquare/DaySquare'
import { getMonthWeeksWithAdjacentDays, getMonthName } from '../../../../managers/dateManager'
import styles from './CalendarInput.style'
import { default as iconStyles } from '../../../../components/Icon/Icon.style'
import { BodyBold2, BodyBold3, BodyRegular2 } from '../../../../constants/fonts'
import Icon from '../../../../components/Icon/Icon'
import { useTranslation } from 'react-i18next'

export const CalendarInput = ({
  clickedDay,
  setClickedDay,
}) => {

  const { t } = useTranslation()
  const [clickedMonth, setClickedMonth] = useState(new Date().getMonth())
  const [clickedYear, setClickedYear] = useState(new Date().getFullYear())

  const incrementMonth = () => {
    let incrementedMonth = clickedMonth + 1
    if (incrementedMonth > 11) {
      setClickedYear(clickedYear + 1)
      incrementedMonth = 0
    }
    setClickedMonth(incrementedMonth)
  }

  const decrementMonth = () => {
    let decrementedMonth = clickedMonth - 1
    if (decrementedMonth < 0) {
      setClickedYear(clickedYear - 1)
      decrementedMonth = 11
    }
    setClickedMonth(decrementedMonth)
  }

  const renderWeek = (weekDays, key) => {
    return (
      <View
        key={key}
        style={styles.week}
      >
        {
          weekDays.map((weekDay, index) => {
            return (
              <DaySquare
                key={index}
                day={weekDay}
                clickedDay={clickedDay}
                setClickedDay={setClickedDay}
                clickedMonth={clickedMonth}
              />
            )
          })
        }
      </View>
    )
  }

  const resetDate = () => {
    setClickedDay(null)
  }

  const setTodaysDate = () => {
    let today = new Date()
    setClickedDay(today)
  }

  return (
    <View
      style={styles.calendar}
    >
      <BodyRegular2
        style={styles.title}
      >
        {
          t("SELECT_DATE")
        }
      </BodyRegular2> 
      <View
        style={styles.separatedContent}
      >
        <BodyBold3
          style={styles.monthLabel}
        >
          {
            getMonthName(clickedYear, clickedMonth )
          }
        </BodyBold3>
        <View
          style={styles.buttons}
        >
          <Icon
              fontFamily={"Material Symbols Outlined"}
              name={"arrow_upward"}
              iconBrand = {'MATERIAL_ICONS'}
              style={[
                iconStyles.bigIcon,
                iconStyles.textIcon
              ]}               
              onClick={decrementMonth}                
          />
          <Icon
              fontFamily={"Material Symbols Outlined"}
              name={"arrow_downward"}
              iconBrand = {'MATERIAL_ICONS'}
              style={[
                iconStyles.bigIcon,
                iconStyles.textIcon
              ]}                  
              onClick={incrementMonth}                
          />
        </View>        
      </View>
      <View
        style={styles.days}
      >  
        <View
          style={styles.week}
        >
          <BodyBold2 style={styles.dayNameText}>{"LU"}</BodyBold2>    
          <BodyBold2 style={styles.dayNameText}>{"MA"}</BodyBold2>    
          <BodyBold2 style={styles.dayNameText}>{"MI"}</BodyBold2>    
          <BodyBold2 style={styles.dayNameText}>{"JU"}</BodyBold2>    
          <BodyBold2 style={styles.dayNameText}>{"VI"}</BodyBold2>    
          <BodyBold2 style={styles.dayNameText}>{"SA"}</BodyBold2>    
          <BodyBold2 style={styles.dayNameText}>{"DO"}</BodyBold2>    
        </View>
        {
          getMonthWeeksWithAdjacentDays(clickedMonth, clickedYear).map((week, index) => {
            return renderWeek(week, index)
          })
        }
      </View>
      <View
          style={[styles.separatedContent]}
        >
          <BodyBold3 
            style={styles.mainColorTextButton}
            onClick={resetDate}
          >
            {t("DELETE")}
          </BodyBold3>
          
          <BodyBold3 
            style={styles.mainColorTextButton}
            onClick={setTodaysDate}
          >
            {t("TODAY")}
          </BodyBold3> 
          

        </View> 
    </View>
  )
}
