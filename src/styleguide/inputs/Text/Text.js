import React, {  useState } from 'react'
import SPInput from '../Input'
import TextBody from './Components/TextBody/TextBody'


/**
 * @description Text input
 * @param {string} props.label - Label to be added on top of the input
 * @param {boolean} props.disabled - Boolean to determine if its disabled
 * @param {string} props.errorMessage - Error label for incorrect entries
 * @param {string} props.prefix - Prefix to be added to the content constantly
 * @param {string} props.placeholder - Placeholder of the text entry
 * @param {string} props.mask - Mask to be placed in the text entry
 * @param {Object} props.icon - Icon object
 * @param {string} props.icon.name - Name of the icon
 * @param {string} props.icon.fontFamily - Font family inside an icon brand (Variations)
 * @param {string} props.icon.iconBrand - Icon provider: [MATERIAL_ICONS, FONT_AWESOME, BRANDS_FA, FLAGS]
 * @param {string} props.icon.description - Description to be shown on hover of the icon
 * @param {boolean} props.placeIconRight - Icon will appear on right if true
 * @param {string} props.validPattern - Regex to validate content of input
 * @param {Function} props.onChangeValue - (content, maskedContent) => {} - Function called on change
 * @param {boolean} props.secureTextEntry - Boolean to determine if its a password (secure) text entry
 * @param {boolean} props.required - Whether or not the input value is required
 * @param {boolean} props.numeric - Whether or not the input only allows digits to be typed
 * 
 * @example 1
 * @see http://localhost:3000#text_inputs
 */
const SPTextInput = ({
    label, 
    prefix = '', 
    placeholder,
    mask,
    disabled,
    icon, 
    placeIconRight,
    validPattern = '.*', 
    onChangeValue, 
    errorMessage, 
    secureTextEntry,
    required,
    numeric
}) => {

    const [content, setContent] = useState(prefix)
    const [maskedContent, setMaskedContent] = useState(prefix + (mask ? mask : ''))
    const [entryHasErrors, setEntryHasErrors] = useState(false)

    const contentIsEmpty = () => {
        const emptyContent = prefix
        return content === emptyContent
    }

    const contentIsValid = () => {        
        var regex = new RegExp(validPattern)            
        return regex.test(content.substring(prefix.length))
    }

    function renderSPTextInput() {
        return (
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
                additionalValue={maskedContent}
            >
                <TextBody
                    prefix={prefix}
                    placeIconRight={placeIconRight}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    mask={mask}
                    disabled={disabled}
                    icon={icon}
                    entryHasErrors={entryHasErrors}
                    setContent={setContent}
                    setMaskedContent={setMaskedContent}
                    content={content}
                    numeric={numeric}
                    maskedContent={maskedContent}
                />             
            </SPInput>
        )
    }

    return renderSPTextInput()
}
  
export default SPTextInput;