import React, { useEffect, useState } from 'react'
import Dropdown from '../../../../components/Dropdown/Dropdown'
import { CalendarInput } from '../CalendarInput/CalendarInput'

import { View } from 'react-native-web'

import {default as globalStyles} from '../../../Input.style'
import {default as dropdownStyles} from '../../../../components/Dropdown/Dropdown.style'
import styles from './DateDropdown.style'
import { TextButton } from '../../../../components/Buttons/TextButton/TextButton'
import { useTranslation } from 'react-i18next'

export const DateDropdown = ({
    selectedYear,
    selectedMonth,
    selectedDate,
    isOpen,
    setIsOpen,
    setSelectedDate,
    setSelectedMonth,
    setSelectedYear,    
}) => {

    const { t } = useTranslation()
    const [clickedDay, setClickedDay] = useState(selectedYear ? new Date(selectedYear, selectedMonth, selectedDate) : null)
    const [currentSelection, setCurrentSelection] = useState(selectedYear ? new Date(selectedYear, selectedMonth, selectedDate) : null)

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

    const applySelection = () => {         
        setIsOpen(false)
    }

    const cancelSelection = () => {        
        if (currentSelection !== null) {
            setSelectedDate(currentSelection.getDate())
            setSelectedMonth(currentSelection.getMonth())
            setSelectedYear(currentSelection.getFullYear())
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
        style={[styles.dateDropdown, globalStyles.inputDropdown]}
    >
        <CalendarInput
            clickedDay={clickedDay}
            setClickedDay={setClickedDay}
        />
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
