import React, { useState, useEffect } from "react";
import { View } from "react-native-web";

import SPInput from "../Input";
import SPToggleInput from "../Toggle/Toggle";
import { TextButton } from "../../components/Buttons/TextButton/TextButton";
import { UniqueSelectionOption } from "./Components/Option/Option";

import styles from "./UniqueSelection.style";

import { useTranslation } from 'react-i18next'

const SPUniqueSelectionInput = ({   
    label,
    required,
    onChangeValue, 
    disabled,
    options,
    horizontalDisplay,
    currentSelectedOption = null,
}) => {
 
    const { t } = useTranslation()

    const [selectedOption, setSelectedOption] = useState(currentSelectedOption)

    const contentIsEmpty = () => {
        return selectedOption === null
    }

    const contentIsValid = () => {
        return true
    }

    const selectOption = (newSelectedOption) => {
        if (!disabled) {
            setSelectedOption(newSelectedOption)
        }
    }

    const clearSelection = () => {
        setSelectedOption(null)
    }

    const optionIsSelected = (option) => {
        if (selectedOption) {
            return selectedOption.key === option.key
        }
        else {
            return false        
        }
    }

    const handleOptionToggle = (isSelected, option) => {
        // if (isSelected) {
            selectOption(option) 
        // }
    }

    const renderOptions = () => {
        return options.map((option) => {
            return (
                <UniqueSelectionOption
                    key={option.key}
                    selectThisOption={() => selectOption(option)}
                    thisOptionIsSelected={() => optionIsSelected(option)}
                    selectedOption={selectedOption}
                    disabled={disabled}
                    option={option}
                />
            )
        })
    }

    function renderUniqueSelection() {

        return (
            <SPInput
                contentIsEmpty={contentIsEmpty}
                contentIsValid={contentIsValid}
                onChangeValue={onChangeValue} 
                disabled={disabled}         
                label={label}
                required={required}
                value={selectedOption}            
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
        )
    }

    return renderUniqueSelection() 
}
  
export default SPUniqueSelectionInput;