import React from 'react'
import { Pressable, Text } from "react-native-web"
import Icon from "../../../../components/Icon/Icon"

// Styles
import styles from "./SelectBody.style"
import {default as globalStyles} from '../../../Input.style'
import { default as iconStyles } from '../../../../components/Icon/Icon.style'


const SelectBody = ({
    dropdownIsOpen,
    toggleDropdown,
    disabled,
    selectedOption,
    style
}) => {

    const renderSelectBody = () => (
        <Pressable                    
            style={[
                globalStyles.input, 
                styles.input, 
                globalStyles.defaultBodyHeight,  
                style ? style : null
            ]}
            onPress={toggleDropdown}
            disabled={disabled}
        >
            <Text style={styles.textValue}>{selectedOption.value}</Text>
            {
                dropdownIsOpen ? 
                <>
                    <Icon
                        fontFamily={"Material Symbols Outlined"}
                        name={"expand_less"}
                        iconBrand = {'MATERIAL_ICONS'}
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
                    style={[
                        iconStyles.icon,
                        iconStyles.grayIcon
                    ]}               
                />
            }                
        </Pressable>
    )

    return renderSelectBody()
}

export default SelectBody