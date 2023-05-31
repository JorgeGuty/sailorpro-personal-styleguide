import React from 'react'

import { Pressable, Text, View } from "react-native-web"
import Icon from "../../../../components/Icon/Icon"

import styles from "./MultipleSelectBody.style"
import {default as globalStyles} from '../../../Input.style'
import { default as iconStyles } from '../../../../components/Icon/Icon.style'
import SelectedOption from '../SelectedOption/SelectedOption'
import { t } from 'i18next'

const MultipleSelectBody = ({
    dropdownIsOpen,
    toggleDropdown,
    disabled,
    selectedOptions,
    deselectOption,
    placeholder,
    maxSelectedOptions,
}) => {

    const renderSelectedOptions = () => {
        console.log('SELECTED OPTIONS', selectedOptions)
        return (
            <View
                style={styles.selectedOptionsList}
            >
                {
                    selectedOptions.map((selectedOption) => {
                        return (
                            <SelectedOption
                                deselectThisOption={() => deselectOption(selectedOption)}
                                selectedOption={selectedOption}
                            />
                        )
                    })
                }
            </View>
        )        
    }

    return (
        <Pressable                    
            style={[
                globalStyles.input, 
                styles.input
            ]}
            onPress={() => {
                if (selectedOptions.length < maxSelectedOptions) toggleDropdown()
            }}
            disabled={disabled}
        >        
            {
                selectedOptions.length > 0 ?
                renderSelectedOptions()   
                :
                <Text style={styles.textValue}>{placeholder}</Text>
            }
            {
                dropdownIsOpen ? 
                <>
                    <Icon
                        fontFamily={"Material Symbols Outlined"}
                        name={"expand_less"}
                        iconBrand = {'MATERIAL_ICONS'}
                        description={selectedOptions.length >= maxSelectedOptions ? t('MAX_REACHED') : null}
                        style={[
                            iconStyles.icon,
                            iconStyles.grayIcon
                        ]}                 
                    />
                        
                </>
                :
                <Icon
                    fontFamily={"Material Symbols Outlined"}
                    name={"expand_more"}
                    iconBrand = {'MATERIAL_ICONS'}
                    description={selectedOptions.length >= maxSelectedOptions ? t('MAX_REACHED') : null}
                    style={[
                        iconStyles.icon,
                        iconStyles.grayIcon
                    ]}               
                />
            }                
        </Pressable>
    )
}

export default MultipleSelectBody