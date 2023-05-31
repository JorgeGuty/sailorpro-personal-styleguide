import React, { useEffect, useState } from "react"

import SPInput from "../Input"
import { Text, Pressable, View } from "react-native-web"
import Icon from "../../components/Icon/Icon"
import { DatetimeDropdown } from "./DatetimeDropdown/DatetimeDropdown"

import { formatTime } from "../../managers/dateManager";
import { turnDateToUTC } from "../../managers/dateManager";

import { default as iconStyles } from '../../components/Icon/Icon.style'
import { default as globalStyles } from '../Input.style'
import styles from "./Datetime.style";

/**
 * Datetime input
 * @param {string} props.label - Label to be added on top of the input
 * @param {boolean} props.disabled - Boolean to determine if its disabled
 * @param {string} props.errorMessage - Error label for incorrect entries
 * @param {boolean} props.required - Whether or not the input value is required
 * @param {Function} props.onChangeValue - (UTCDateTime) => {} - Function called when content is to be handled
 * @param {string} props.dateMask - Mask for the date
 */
const SPDateTimeInput = ({
    disabled,
    label,
    errorMessage,
    required,
    onChangeValue,
    dateMask = 'dd/mm/aaaa',
}) => {

    const timeMask = '--:-- --'

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    const [selectedTimeString, setSelectedTimeString] = useState(timeMask)
    const [selectedDateString, setSelectedDateString] = useState(dateMask)

    const [selectedHour, setSelectedHour] = useState(null)
    const [selectedMinutes, setSelectedMinutes] = useState(null)
    
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => { 
        if (!contentIsEmpty()) {
            setSelectedTimeString(formatTime(selectedHour, selectedMinutes))
            setSelectedDateString(selectedDate+'/'+(selectedMonth + 1)+'/'+selectedYear)
        }
        else {
            setSelectedTimeString(timeMask)
            setSelectedDateString(dateMask)
        }
    }, [selectedDate, selectedHour, selectedMinutes])

    const contentIsEmpty = () => {
        return selectedMinutes === null || selectedHour === null || selectedDate === null
    }

    const contentIsValid = () => {       
        return true
    }

    function renderDatetime() {

        return (
            <View
                style={globalStyles.dropdownInput}
            >
                <SPInput
                    contentIsEmpty={contentIsEmpty}
                    contentIsValid={contentIsValid}
                    onChangeValue={() => onChangeValue(turnDateToUTC(new Date(selectedYear, selectedMonth, selectedDate, selectedHour, selectedMinutes)))}   
                    disabled={disabled}         
                    label={label}
                    errorMessage={errorMessage}
                    required={required}
                    value={[selectedDate]}
                >
                    <Icon
                        fontFamily={"Material Symbols Outlined"}
                        name={"date_range"}
                        iconBrand = {'MATERIAL_ICONS'}
                        style={[
                            iconStyles.icon,
                            iconStyles.grayIcon
                        ]}                
                    />
                    <Pressable                    
                        style={[
                            globalStyles.input, 
                            globalStyles.defaultBodyHeight,  
                            styles.values
                        ]}
                        onPress={() => setDropdownIsOpen(true)}
                        disabled={disabled}
                    >
                        <Text 
                            style={styles.textValue}
                        >
                            {selectedDateString}
                        </Text>     
                        <Text 
                            style={styles.textValue}
                        >
                            {selectedTimeString}
                        </Text>                
                    </Pressable>                                    
                </SPInput>
                <DatetimeDropdown
                    isOpen={dropdownIsOpen}
                    selectedHour={selectedHour}
                    selectedMinutes={selectedMinutes}
                    selectedYear={selectedYear}
                    selectedMonth={selectedMonth}
                    selectedDate={selectedDate}  

                    setIsOpen={setDropdownIsOpen}
                    setSelectedHour={setSelectedHour}
                    setSelectedMinutes={setSelectedMinutes}
                    setSelectedYear={setSelectedYear}
                    setSelectedMonth={setSelectedMonth}
                    setSelectedDate={setSelectedDate}
                />
            </View>
        )
    }

    return renderDatetime()
}
  
export default SPDateTimeInput;