import React, { useState, useEffect } from "react";
import { TextInput, View } from "react-native-web";

import SPInput from "../Input";
import { ButtonTextMini } from "../../constants/fonts";
// styles
import styles from "./MultilineText.style";
import {default as globalStyles} from '../Input.style'
import { TextArea } from "../../components/Wrappers/TextArea/TextArea";

/**
 * Multiline text input
 * @param {integer} props.maxCharacters - Maximum amount of chars permitted
 * @param {string} props.label - Label to be added on top of the input
 * @param {boolean} props.disabled - Boolean to determine if its disabled
 * @param {Function} props.onChangeValue - (content) => {} - function for handling of the selected option
 * @param {string} props.placeholder - Placeholder of the text entry
 * @param {Function () => {}} props.onBlur - To allow an external action to happen on blur
 */
const SPMultilineTextInput = ({
    maxCharacters = Number.MAX_SAFE_INTEGER,
    disabled,
    label,
    onChangeValue,
    placeholder,
    value = '',
    onBlur,
    resize = true,
    required
}) => {
    const emptyContent = ''
    const [content, setContent] = useState(value)

    useEffect(() => {
        setContent(value)
    }, [value])

    const contentIsEmpty = () => {
        return content === emptyContent
    }

    const contentIsValid = () => {
        return content.length <= maxCharacters
    }

    const onChangeEvent = (event) => {
        setContent(event.target.value)
    }

    function renderMultilineText() {
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
                    extended={true}
                    value={content}
                    onBlur={onBlur}
                    removeHorizontalPadding={true}
                >
                    <TextArea
                        style = {{
                            ...globalStyles.input,
                            ...styles.input,
                            resize: !resize ? 'none' : null
                        }} 
                        placeholder = {placeholder} 
                        disabled = {disabled}
                        onChange = {onChangeEvent} // NOTE: not compatible with react native 
                        value={content}                   
                    />
                </SPInput>
                {
                    // Validates if maxCharacters equals the default value (that is, it wasn't specified)
                    maxCharacters !== Number.MAX_SAFE_INTEGER && 
                    <ButtonTextMini
                        style={styles.charsLeftLabel}
                    >
                        {`${content.length}/${maxCharacters}`}
                    </ButtonTextMini>             
                }
            </View>
        )
    }

    return renderMultilineText()
}
  
export default SPMultilineTextInput;