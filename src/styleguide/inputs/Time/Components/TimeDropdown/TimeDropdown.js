import React, { useEffect, useState } from 'react'
import Dropdown from '../../../../components/Dropdown/Dropdown'
import { TimeInput } from '../TimeInput/TimeInput'

import { View } from 'react-native-web'

import {default as globalStyles} from '../../../Input.style'
import {default as dropdownStyles} from '../../../../components/Dropdown/Dropdown.style'
import styles from './TimeDropdown.style'
import { TextButton } from '../../../../components/Buttons/TextButton/TextButton'

import { useTranslation } from 'react-i18next'

export const TimeDropdown = ({
    isOpen,
    setIsOpen,
    selectedHour,
    selectedMinutes,
    setSelectedHour,
    setSelectedMinutes,
}) => {

    const { t } = useTranslation()
    const [clickedMinutes, setClickedMinutes] = useState(selectedMinutes)
    const [clickedHour, setClickedHour] = useState(selectedHour)
    const [clickedPeriod, setClickedPeriod] = useState('AM')
    const [periodIsPM, setPeriodIsPM] = useState(false)

    const [currentSelection, setCurrentSelection] = useState({
        hour: selectedHour,
        minutes: selectedMinutes
    })

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
        if (currentSelection.hour !== null && currentSelection.minutes !== null) {
            setSelectedHour(currentSelection.hour)
            setSelectedMinutes(currentSelection.minutes)
        }
        else {
            setSelectedHour(null)
            setSelectedMinutes(null)
        }
        setIsOpen(false)
    }

  return (
    <Dropdown
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        style={[styles.timeDropdown, globalStyles.inputDropdown]}
    >
        <TimeInput
            clickedHour={clickedHour}
            setClickedHour={setClickedHour}
            clickedMinutes={clickedMinutes}
            setClickedMinutes={setClickedMinutes}
            clickedPeriod={clickedPeriod}
            setClickedPeriod={setClickedPeriod}            
        />
        <View
            style={dropdownStyles.dropdownButtons}
        > 
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
