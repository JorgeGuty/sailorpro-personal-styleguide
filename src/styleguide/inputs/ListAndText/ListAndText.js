import SelectDropdown from "../Select/Components/SelectDropdown/SelectDropdown";
import SelectBody from "../Select/Components/SelectBody/SelectBody";
import TextBody from "../Text/Components/TextBody/TextBody";
import SPInput from "../Input";

import { useEffect, useState } from "react";
import {View} from 'react-native-web'

// styles
import styles from "./ListAndText.style";
import {default as globalStyles} from '../Input.style'


/**
 *  List and text input
 * @param {Object[]} props.options - The options for the dropdown
 * @param {boolean} props.placeListRight - If true, list will appear on the right and the icon (if present) on the left. 
 * @param {Object} props.icon - Icon object
 * @param {string} props.icon.name - Name of the icon
 * @param {string} props.icon.fontFamily - Font family inside an icon brand (Variations)
 * @param {string} props.icon.iconBrand - Icon provider: [MATERIAL_ICONS, FONT_AWESOME, BRANDS_FA, FLAGS]
 * @param {string} props.icon.description - Description to be shown on hover of the icon
 * @param {string} props.validPattern - Regex to validate content of input
 * @param {boolean}  props.searchable - Whether or not to include a text entry on the dropdown for text search in the options
 * @param {boolean} props.disabled - Boolean to determine if its disabled
 * @param {string} props.label - Label to be added on top of the input
 * @param {string} props.errorMessage - Error label for incorrect entries
 * @param {string} props.placeholder - Placeholder of the text entry
 * @param {Function} props.onChangeValue - (content, maskedContent) => {} - Function called on change
 * @param {Object} props.currentSelectedOption - Current selected option when loaded 
 */
const SPListAndTextInput = ({
    options,
    placeListRight,
    icon,
    validPattern = '.*',
    searchable,
    disabled,
    label,
    mask = '',
    errorMessage,
    placeholder,
    onChangeValue,
    currentSelectedOption,
    required
}) => {

    const defaultSelection = currentSelectedOption ? currentSelectedOption : options[0]

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(defaultSelection)
    const [content, setContent] = useState(defaultSelection.prefix)
    const [maskedContent, setMaskedContent] = useState(defaultSelection.prefix + (defaultSelection.mask ? defaultSelection.mask : mask))
    const [entryHasErrors, setEntryHasErrors] = useState(false)
    const [availableOptions, setAvailableOptions] = useState(options.filter((option) => {
        return defaultSelection.key !== option.key
    }))

    useEffect(() => {
        setContent(selectedOption.prefix)
        setMaskedContent(selectedOption.prefix + (selectedOption.mask ? selectedOption.mask : mask))
    }, [selectedOption])

    const contentIsEmpty = () => {
        const emptyContent = selectedOption.prefix ? selectedOption.prefix : ''
        return content === emptyContent
    }

    const contentIsValid = () => {
        var regex = new RegExp(validPattern)
        return regex.test(content.substring(selectedOption.prefix ? selectedOption.prefix.length : ''))
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

    function renderListAndText() {

        return (
            <View
                style={globalStyles.dropdownInput}
            >
                <SPInput
                        contentIsEmpty={contentIsEmpty}
                        contentIsValid={contentIsValid}
                        onChangeValue={onChangeValue}    
                        disabled={disabled}         
                        label={label}
                        errorMessage={errorMessage}
                        setExternalEntryHasErrors={setEntryHasErrors}
                        required={required}
                        value={content}
                        secondaryValue={maskedContent}
                >
                    {
                        !placeListRight &&
                        <SelectBody
                            dropdownIsOpen={dropdownIsOpen}
                            toggleDropdown={toggleDropdown}
                            disabled={disabled}
                            selectedOption={selectedOption}    
                            style={styles.list}                                                
                        />
                    }
                    <TextBody
                        prefix={selectedOption.prefix}
                        placeIconRight={!placeListRight}
                        placeholder={placeholder}
                        mask={selectedOption.mask ? selectedOption.mask : mask}
                        disabled={disabled}
                        icon={icon}
                        entryHasErrors={entryHasErrors}
                        setContent={setContent}
                        setMaskedContent={setMaskedContent}                    
                        content={content}
                        maskedContent={maskedContent}
                    />        
                    {
                        placeListRight &&
                        <SelectBody
                            dropdownIsOpen={dropdownIsOpen}
                            toggleDropdown={toggleDropdown}
                            disabled={disabled}
                            selectedOption={selectedOption}    
                            style={styles.list}                    
                        />
                    }                     
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

    return renderListAndText()
}
  
export default SPListAndTextInput;