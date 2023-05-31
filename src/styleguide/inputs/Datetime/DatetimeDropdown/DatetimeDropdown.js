import React, {useEffect, useState} from 'react'
import styles from './DatetimeDropdown.style'
import {default as dropdownStyles} from '../../../components/Dropdown/Dropdown.style'
import {default as globalStyles} from '../../Input.style'

import { CalendarInput } from '../../Date/components/CalendarInput/CalendarInput'
import { TimeInput } from '../../Time/Components/TimeInput/TimeInput'

import Dropdown from '../../../components/Dropdown/Dropdown'
import { View } from 'react-native-web'
import { TextButton } from '../../../components/Buttons/TextButton/TextButton'
import { useTranslation } from 'react-i18next'

export const DatetimeDropdown = ({
    isOpen,
    selectedHour,
    selectedMinutes,
    selectedYear,
    selectedMonth,
    selectedDate,
    setIsOpen,
    setSelectedHour,
    setSelectedMinutes,
    setSelectedYear,
    setSelectedMonth,
    setSelectedDate,
}) => {

    const { t } = useTranslation()
    const [clickedDay, setClickedDay] = useState(selectedYear ? new Date(selectedYear, selectedMonth, selectedDate) : null)
    const [clickedMinutes, setClickedMinutes] = useState(selectedMinutes)
    const [clickedHour, setClickedHour] = useState(selectedHour)
    const [clickedPeriod, setClickedPeriod] = useState('AM')

    const [currentSelection, setCurrentSelection] = useState({
        day: selectedYear ? new Date(selectedYear, selectedMonth, selectedDate) : null,
        hour: selectedHour,
        minutes: selectedMinutes,
    })

    useEffect(() => {
        if(clickedDay !== null ){            
            setSelectedDate(clickedDay.getDate())
            setSelectedMonth(clickedDay.getMonth())
            setSelectedYear(clickedDay.getFullYear())
        }
        else {
            setSelectedDate(null)
            setSelectedMonth(null)
            setSelectedYear(null)
        }       
    }, [clickedDay])

    useEffect(() => {
        if(clickedHour !== null && clickedMinutes !== null){
            if (clickedPeriod === 'PM') {
                setSelectedHour(clickedHour + 12)
            }            
            else {
                setSelectedHour(clickedHour)
            }            
            setSelectedMinutes(clickedMinutes)
        }
        else {
            setSelectedHour(null)
            setSelectedMinutes(null)
        }       
    }, [clickedMinutes, clickedHour])

    useEffect(() => {
        if (clickedPeriod === 'PM') {
            setSelectedHour(clickedHour + 12)
        }
        else {
            setSelectedHour(clickedHour)
        } 
    }, [clickedPeriod])


    const applySelection = () => {         
        setIsOpen(false)
    }

    const cancelSelection = () => {        
        if (currentSelection.day !== null) {
            setSelectedDate(currentSelection.day.getDate())
            setSelectedMonth(currentSelection.day.getMonth())
            setSelectedYear(currentSelection.day.getFullYear())
        }
        else {
            setSelectedDate(null)
            setSelectedMonth(null)
            setSelectedYear(null)
        }
        setIsOpen(false)
    }

  return (
    <Dropdown        
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        style={[styles.dateTimeDropdown, globalStyles.inputDropdown]}
    >
        <View
            style={[styles.inputs]}
        >
            <CalendarInput
                clickedDay={clickedDay}
                setClickedDay={setClickedDay}
            />
            <View
                style={styles.limit}
            />
            <TimeInput
                clickedHour={clickedHour}
                setClickedHour={setClickedHour}
                clickedMinutes={clickedMinutes}
                setClickedMinutes={setClickedMinutes}  
                clickedPeriod={clickedPeriod}
                setClickedPeriod={setClickedPeriod}                                  
            />
        </View>
        
        <View
            style={dropdownStyles.dropdownButtons}
        >
            <TextButton
                onClick={cancelSelection}
                style={"SECONDARY"}
                truncated={false}
            >
                {t("CANCEL")}
            </TextButton>    
            <TextButton
                onClick={applySelection}
                style={"PRIMARY"}
                truncated={false}
            >
                {t("APPLY")}
            </TextButton>                                  
        </View>
    </Dropdown>
  )
}
