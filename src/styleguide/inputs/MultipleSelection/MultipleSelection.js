import React, { useState, useEffect } from "react";
import { View } from "react-native-web";

import { ButtonTextMini } from "../../constants/fonts";
import SPInput from "../Input";
import SPToggleInput from "../Toggle/Toggle";

import styles from "./MultipleSelection.style";
import { TextButton } from "../../components/Buttons/TextButton/TextButton";

import { useTranslation } from 'react-i18next'

const SPMultipleSelectionInput = ({   
    label,
    required,
    onChangeValue, 
    disabled,
    options,
    currentSelectedOptions = [],
    horizontalDisplay,
    checkerType,
    maxSelectedItems = Number.MAX_SAFE_INTEGER
}) => {
    
    const { t } = useTranslation()

    const [selectedOptions, setSelectedOptions] = useState(currentSelectedOptions)

    const contentIsEmpty = () => {
        return selectedOptions === []
    }

    const contentIsValid = () => {
        return true
    }

    const selectOption = (newSelectedOption) => {
        if (!disabled) {
            const newSelectedOptions = [...selectedOptions]           
    
            newSelectedOptions.push(newSelectedOption)
            setSelectedOptions(newSelectedOptions)
        }
    }

    const deselectOption = (optionToRemove) => {
        const filteredSelectedOptions = [...selectedOptions].filter((option, index) => {
            return optionToRemove.key !== option.key
        })
        setSelectedOptions(filteredSelectedOptions)
    }

    const clearSelection = () => {
        setSelectedOptions([])
    }

    const optionIsSelected = (option) => {
        return selectedOptions.filter((selected) => selected.key === option.key).length > 0
    }

    const handleOptionToggle = (isSelected, option) => {
        isSelected ? selectOption(option) : deselectOption(option)
    }

    const renderOptions = () => {
        return options.map((option, index) => {
            return (
                <SPToggleInput
                    key={option.key}
                    label={option.value}
                    onChangeValue={(isSelected) => handleOptionToggle(isSelected, option)}
                    disabled={selectedOptions.length >= maxSelectedItems && !optionIsSelected(option)}
                    value={optionIsSelected(option)}
                    type={checkerType}
                />
            )
        })
    }

    function renderMultipleSelection() {

        return (
            <View
                style={styles.body}
            >
                <SPInput
                    contentIsEmpty={contentIsEmpty}
                    contentIsValid={contentIsValid}
                    onChangeValue={onChangeValue}    
                    disabled={disabled}         
                    label={label}
                    required={required}
                    value={selectedOptions}            
                >
                    <View
                        style={[
                            styles.options,
                            horizontalDisplay ? styles.horizontalDisplay : styles.verticalDisplay
                        ]}
                    >
                        {
                            renderOptions()
                        }
                    </View>
                    <TextButton
                        style={'TERTIARY'}
                        trucated={true}
                        styling={styles.clearSelectionButton}
                        onClick={clearSelection}
                        small={true}
                    >
                        {t('CLEAR_SELECTION')}
                    </TextButton>                    
                </SPInput>
                {
                    // Validates if maxCharacters equals the default value (that is, it wasn't specified)
                    maxSelectedItems !== Number.MAX_SAFE_INTEGER && 
                    <ButtonTextMini
                        style={styles.optionsLeftLabel}
                    >
                        {`${selectedOptions.length}/${maxSelectedItems}`}
                    </ButtonTextMini>             
                }
            </View>
        )
    }

    return renderMultipleSelection() 
}
  
export default SPMultipleSelectionInput;