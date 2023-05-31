import { useState, useEffect } from "react";

import Icon from "../../components/Icon/Icon";
import { TimeDropdown } from "./Components/TimeDropdown/TimeDropdown";
import { Pressable, Text } from "react-native-web";
import {View} from 'react-native-web'
import SPInput from "../Input";

import { formatTime } from "../../managers/dateManager";
import { turnDateToUTC } from "../../managers/dateManager";

import { default as iconStyles } from '../../components/Icon/Icon.style'
import {default as globalStyles} from '../Input.style'
import styles from "./Time.style";

/**
 * Time input
 * @param {string} props.label - Label to be added on top of the input
 * @param {boolean} props.disabled - Boolean to determine if its disabled
 * @param {string} props.errorMessage - Error label for incorrect entries
 * @param {boolean} props.required - Whether or not the input value is required
 * @param {Function} props.onChangeValue - (UTCDefaultDateWithSelectedTime) => {} - Function called when content is to be handled
 */
const SPTimeInput = ({
    disabled,
    label,
    errorMessage,
    required,
    onChangeValue,
}) => {

    const timeMask = '--:-- --'

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [selectedTimeString, setSelectedTimeString] = useState(timeMask)
    const [selectedHour, setSelectedHour] = useState(null)
    const [selectedMinutes, setSelectedMinutes] = useState(null)

    useEffect(() => { 
        if (!contentIsEmpty()) {            
            setSelectedTimeString(formatTime(selectedHour, selectedMinutes))
        }
        else {
            setSelectedTimeString(timeMask)
        }
    }, [selectedHour, selectedMinutes])

    const contentIsEmpty = () => {
        return selectedMinutes === null || selectedHour === null
    }

    const contentIsValid = () => {       
        return true
    }

    function renderTime() {

        return (
            <View
                style={globalStyles.dropdownInput}
            >
                <SPInput
                    contentIsEmpty={contentIsEmpty}
                    contentIsValid={contentIsValid}
                    onChangeValue={() => onChangeValue(turnDateToUTC(new Date(2000, 0, 0, selectedHour, selectedMinutes)))}   
                    disabled={disabled}         
                    label={label}
                    errorMessage={errorMessage}
                    required={required}
                    value={[selectedHour, selectedMinutes]}
                >
                    <Icon
                        fontFamily={"Material Symbols Outlined"}
                        name={"schedule"}
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
                        >{selectedTimeString}</Text>                
                    </Pressable>                                    
                </SPInput>
                <TimeDropdown
                    isOpen={dropdownIsOpen}
                    setIsOpen={setDropdownIsOpen}
                    
                    selectedHour={selectedHour}
                    selectedMinutes={selectedMinutes}
                    setSelectedHour={setSelectedHour}
                    setSelectedMinutes={setSelectedMinutes}
                />
            </View>
        )
    }

    return renderTime()
}
  
export default SPTimeInput;