import { useEffect, useState } from "react";

import { Text, Pressable, View } from "react-native-web";
import SPInput from "../Input";
import Icon from "../../components/Icon/Icon";
import { DateDropdown } from "./components/DateDropdown/DateDropdown";

import { turnDateToUTC } from "../../managers/dateManager";

import { default as iconStyles } from '../../components/Icon/Icon.style'
import {default as globalStyles} from '../Input.style'
import styles from "./Date.style";

/**
 * Date input
 * @param {string} props.label - Label to be added on top of the input
 * @param {boolean} props.disabled - Boolean to determine if its disabled
 * @param {string} props.errorMessage - Error label for incorrect entries
 * @param {boolean} props.required - Whether or not the input value is required
 * @param {Function} props.onChangeValue - (UTCDate) => {} - Function called when content is to be handled
 * @param {string} props.dateMask - Mask for the date
 */
const SPDateInput = ({
    disabled,
    label,
    errorMessage,
    required,
    onChangeValue,
    dateMask = 'dd/mm/aaaa',
}) => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [selectedDateString, setSelectedDateString] = useState(dateMask)
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)

    useEffect(() => { 
        if (!contentIsEmpty()) {
            setSelectedDateString(selectedDate+'/'+(selectedMonth + 1)+'/'+selectedYear)
        }
        else {
            setSelectedDateString(dateMask)
        }
    }, [selectedDate])

    const contentIsEmpty = () => {
        return selectedDate === null
    }

    const contentIsValid = () => {       
        return true
    }

    const toggleDropdown = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }    



    function renderDate() {
        return (
            <View
                style={globalStyles.dropdownInput}
            >
                <SPInput
                    contentIsEmpty={contentIsEmpty}
                    contentIsValid={contentIsValid}
                    onChangeValue={() => onChangeValue(turnDateToUTC(new Date(selectedYear, selectedMonth, selectedDate)))}   
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
                            styles.textValue
                        ]}
                        onPress={() => setDropdownIsOpen(true)}
                        disabled={disabled}
                    >
                        <Text 
                            style={styles.textValue}
                        >{selectedDateString}</Text>                
                    </Pressable>                                    
                </SPInput>
                <DateDropdown
                    isOpen={dropdownIsOpen}
                    setIsOpen={setDropdownIsOpen}                        
                    selectedYear={selectedYear}
                    selectedMonth={selectedMonth}
                    selectedDate={selectedDate}
                    setSelectedYear={setSelectedYear}
                    setSelectedMonth={setSelectedMonth}
                    setSelectedDate={setSelectedDate}
                />
            </View>
        )
    }

    return renderDate()
}
  
export default SPDateInput;
