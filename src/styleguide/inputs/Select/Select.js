import React, { useState } from "react";
import { View } from "react-native-web";
import SPInput from "../Input";
import SelectDropdown from "./Components/SelectDropdown/SelectDropdown";
import SelectBody from "./Components/SelectBody/SelectBody";


import {default as globalStyles} from '../Input.style'

/**
 * Select input
 * @param {string} props.label - Label to be added on top of the input
 * @param {boolean} props.disabled - Boolean to determine if its disabled
 * @param {string} props.placeholder - Placeholder of the select entry
 * @param {boolean} props.required - Whether or not the input value is required
 * @param {boolean}  props.searchable - Whether or not to include a text entry on the dropdown for text search in the options
 * @param {Object[]} props.options - The options for the dropdown
 * @param {Function} props.onChangeValue - (selectedOption) => {} - function for handling of the selected option
 * @param {Object} props.currentSelectedOption - Current selected option when loaded
 */
const SPSelectInput = ({
    label,
    disabled,
    placeholder,
    required,
    searchable,
    options,
    currentSelectedOption,
    onChangeValue,
}) => {
    
    const placeholderOption = currentSelectedOption ? currentSelectedOption : {
        key: null,
        value: placeholder ? placeholder : ''
    }
    
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(placeholderOption)
    const [availableOptions, setAvailableOptions] = useState(options.filter((option) => {
        return placeholderOption.key !== option.key
    }))

    const contentIsEmpty = () => {        
        return selectedOption.key === null
    }

    const contentIsValid = () => {
        return true
    }

    const toggleDropdown = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const selectOption = (optionToSelect) => {
        const newAvailableOptions = [...availableOptions].filter((option) => {
            return optionToSelect.key !== option.key
        })
        
        // return selected option to available options
        if (selectedOption.key !== null) {
             newAvailableOptions.push(selectedOption)
        } 
        
        setAvailableOptions(newAvailableOptions)
        setSelectedOption(optionToSelect)
    }

    function renderSelect() {

        return (
            <View
                style={globalStyles.dropdownInput}
            >
                <SPInput
                    contentIsEmpty={contentIsEmpty}
                    contentIsValid={contentIsValid}
                    onChangeValue={onChangeValue}
                    label={label}
                    disabled={disabled}
                    required={required}
                    value={selectedOption}
                >
                    <SelectBody
                        dropdownIsOpen={dropdownIsOpen}
                        toggleDropdown={toggleDropdown}
                        disabled={disabled}
                        selectedOption={selectedOption}
                    />                                      
                </SPInput>                
                <SelectDropdown
                    searchable={searchable}
                    options={availableOptions}
                    selectOption={selectOption}
                    setDropdownIsOpen={setDropdownIsOpen}
                    isOpen={dropdownIsOpen}
                />  
            </View>
        )
    }

    return renderSelect()
}
  
export default SPSelectInput;
