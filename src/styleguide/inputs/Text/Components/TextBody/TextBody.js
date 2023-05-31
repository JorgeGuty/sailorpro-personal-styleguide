import React, { useEffect } from "react"
import { TextInput, Text, View } from "react-native-web"
import Icon from "../../../../components/Icon/Icon"
import { addCharToMask, applyMask, maskHasSpaces } from '../../../..//managers/maskManager'
import { isNumber } from "../../../../managers/stringManager"

// Styles
import { default as iconStyles } from '../../../../components/Icon/Icon.style'
import {default as globalStyles} from '../../../Input.style'
import styles from "./TextBody.style"

const TextBody = ({
    prefix = '',
    placeIconRight,
    secureTextEntry,
    placeholder,
    mask,
    disabled,
    icon,
    entryHasErrors,
    setContent,
    setMaskedContent,
    content,
    maskedContent,
    numeric
}) => {

    
    // NOT COMPATIBLE WITH REACT NATIVE
    const onChangeEvent = (event) => {       
        let entryData = event.nativeEvent.data

        // validación de que sea un numero si la entrada debe ser numérica
        if (numeric && !isNumber(entryData ? entryData : '0')) {
            return
        }

        mask ? 
        onChangeMaskedInput(event) : 
        onChangeNormalInput(event)
    }

    // NOT COMPATIBLE WITH REACT NATIVE
    const onChangeNormalInput = (event) => {
        setContent(prefix + event.nativeEvent.text)
    }
 
    // NOT COMPATIBLE WITH REACT NATIVE
    const onChangeMaskedInput = (event) => {
        var newMaskedContent = maskedContent
        
        if (event.nativeEvent.inputType.includes('deleteContent')) {
            setContent(prefix)
            newMaskedContent = prefix + mask
        } else if (maskHasSpaces(maskedContent)){
            const newContent = content + event.nativeEvent.data
            setContent(newContent)            
            newMaskedContent = addCharToMask(maskedContent, event.nativeEvent.data)
        }
            
        event.target.value = newMaskedContent
        setMaskedContent(newMaskedContent)
    }

    const renderInputIcon = (iconObj) => {
        return (
            <Icon
                fontFamily={iconObj.fontFamily}
                name={iconObj.name}
                iconBrand = {iconObj.iconBrand}
                description={iconObj.description}
                style={[
                    iconStyles.icon,
                    iconStyles.grayIcon
                ]}                                     
            />
        )
    }

    const renderTextBody = () => (
        <View
            style={styles.textBody}
        >
            {
                icon && !placeIconRight &&
                renderInputIcon(icon)
            }
            {
                prefix !== '' && 
                <Text style={[globalStyles.text, globalStyles.inputElement]}>{prefix}</Text>
            }
            <TextInput        
                secureTextEntry={secureTextEntry}             
                style = {[globalStyles.input]} 
                placeholder = {placeholder ? placeholder : mask} 
                disabled = {disabled}
                onChange = {onChangeEvent} // NOTE: not compatible with react native
                value={mask ? maskedContent.substring(prefix.length) : content.substring(prefix.length)}                   
            />
            {
                icon && placeIconRight && !entryHasErrors &&
                renderInputIcon(icon)
            }
            {
                entryHasErrors &&
                <Icon
                    fontFamily={"Material Icons"}
                    name={"error"}
                    iconBrand = {'MATERIAL_ICONS'}
                    style={[
                        iconStyles.icon,
                        iconStyles.errorIcon
                    ]}                                      
                />                    
            }  
        </View>
    )

    return renderTextBody()
}

export default TextBody