import React, { useState } from 'react'

import SelectDropdown from "../Select/Components/SelectDropdown/SelectDropdown";

import styles from './MultipleSelect.style';
import {default as globalStyles} from '../Input.style'
import { View } from 'react-native-web';
import SPInput from '../Input';
import MultipleSelectBody from './Components/MultipleSelectBody/MultipleSelectBody';
import { ButtonTextMini } from '../../constants/fonts';

export const SPMultipleSelectInput = ({
    label,
    disabled,
    placeholder,
    required,
    searchable,
    options,
    currentSelectedOptions = [],
    maxSelectedOptions = Number.MAX_SAFE_INTEGER,
    onChangeValue,
}) => {

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState(currentSelectedOptions)
  const [availableOptions, setAvailableOptions] = useState(options.filter((option) => {
    return !(currentSelectedOptions.map((selected) => selected.key).includes(option.key))
  }))

  const contentIsEmpty = () => {        
      return selectedOptions.length === 0
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
      setAvailableOptions(newAvailableOptions)

      const newSelectedOptions = [...selectedOptions]
      newSelectedOptions.push(optionToSelect)
      setSelectedOptions(newSelectedOptions)
  }

  const deselectOption = (optionToDeselect) => {
    const newSelectedOptions = [...selectedOptions].filter((option) => {
        return optionToDeselect.key !== option.key
    })      
    setSelectedOptions(newSelectedOptions)

    const newAvailableOptions = [...availableOptions]
    newAvailableOptions.push(optionToDeselect)
    setAvailableOptions(newAvailableOptions)
  }

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
        value={selectedOptions}
      >
        <MultipleSelectBody
          dropdownIsOpen={dropdownIsOpen}
          toggleDropdown={toggleDropdown}
          disabled={disabled}
          selectedOptions={selectedOptions}
          deselectOption={deselectOption}
          placeholder={placeholder}
          maxSelectedOptions={maxSelectedOptions}
        />
      </SPInput>
      {
          // Validates if maxSelectedOptions equals the default value (that is, it wasn't specified)
          maxSelectedOptions !== Number.MAX_SAFE_INTEGER && 
          <ButtonTextMini
              style={styles.optionsLeftLabel}
          >
              {`${selectedOptions.length}/${maxSelectedOptions}`}
          </ButtonTextMini>             
      }
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
