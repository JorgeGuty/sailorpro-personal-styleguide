import React, { useState, useEffect } from "react";
import { View } from "react-native-web";
import styles from "./Input.style";
import { Label } from "../constants/fonts";

/**
 * 
 *  Input base element
    @param {string} props.label - Label to be put over the input
    @param {boolean} props.disabled - Boolean to determine if its disabled
    @param {string} props.errorMessage - Error label for incorrect entries
    @param {boolean} props.extended - To determine height of input
    @param {Function} props.contentIsEmpty - () => boolean - To determine if content is empty
    @param {Function } props.contentIsValid - () => boolean - To determine if content is valid
    @param {Function} props.onChangeValue - () => {} - Called when blur and when props.value changes, handles content of input
    @param {Function} props.onBlur -  () => {} - To allow an external action to happen on blur
    @param {Function} props.onFocus - () => {} - To allow an external action to happen on focus
    @param {Function} props.setExternalEntryHasErrors - () => {} - To set an external entryHasErrors state
    @param {boolean} props.required - Whether or not the input value is required
    @param {any} props.value - variable of any type to trigger a content handling from the outside
    @param {boolean} props.removeHorizontalPadding - to remove the horizontal padding in case the body content needs to cover all the input's content

    @param {ReactComponent} children - Content of the input
 */
const SPInput = ({
    label = '',
    disabled,
    errorMessage,
    children,
    contentIsEmpty,
    contentIsValid,
    onChangeValue,
    setExternalEntryHasErrors,
    onFocus,
    onBlur,
    required,
    value,
    secondaryValue,
    removeHorizontalPadding
}) => {

    const [dynamicStyle, setDynamicStyle] = useState(disabled ? styles.disabled : styles.default)
    const [entryHasErrors, setEntryHasErrors] = useState(false)

    useEffect(() => {
        if (disabled) {            
            setDynamicStyle(styles.disabled)
        }
        else {
            setDynamicStyleBasedOnContent()   
        }
    }, [disabled])

    useEffect(() => {
        if (!disabled) {            
            validateAndHandleValue()
        }        
    }, [value])

    const validateAndHandleValue = () => {
        
        setDynamicStyleBasedOnContent()
    
        if (onChangeValue) {
            onChangeValue(value, secondaryValue)
        }
    
    }

    const setDynamicStyleBasedOnContent = () => { 
        // in case it was previously activated
        hideErrorDialog()

        if (contentIsEmpty()) {
            setDynamicStyle(styles.default)            
        }
        else if (contentIsValid()) {
            setDynamicStyle(styles.filled)
        }
        else {
            setDynamicStyle(styles.error)
            // activates error label and icon
            showErrorDialog()
        }        
    }

    const showErrorDialog = () => {
        setEntryHasErrors(true)
        if (setExternalEntryHasErrors) {
            setExternalEntryHasErrors(true)
        }
    }

    const hideErrorDialog = () => {
        setEntryHasErrors(false)
        if (setExternalEntryHasErrors) {
            setExternalEntryHasErrors(false)
        }
    }

    const onFocusEvent = (event) => {
        if (onFocus) {
            onFocus()
        }

        entryHasErrors ? setDynamicStyle(styles.error) : setDynamicStyle(styles.focus)
    }

    const onBlurEvent = (event) => {
        setDynamicStyleBasedOnContent()
    }

    function renderInput() {

        return (
            <View
                style={[
                    styles.spInput,
                ]}
            >
                {
                    (label || required) &&
                    <Label>{label + (required ? ' *' : '')}</Label>
                }
                <View
                    onFocus = {onFocusEvent}
                    onBlur = {onBlurEvent}
                    style = {[
                        styles.body, 
                        removeHorizontalPadding ? styles.noHorizontalPadding : null,
                        dynamicStyle,   
                    ]}
                >
                    {
                        // from props
                        children
                    }
                </View>
                {
                    entryHasErrors && errorMessage &&
                    <Label style={styles.errorMessage}>{errorMessage}</Label>
                }                               
            </View>
        )
    }

    return renderInput()
}
  
export default SPInput;