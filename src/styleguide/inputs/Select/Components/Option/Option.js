import React, { useEffect, useState } from 'react'
import { Pressable, Text } from 'react-native-web'
import {default as globalStyles } from '../../../Input.style'
import styles from './Option.style'

const Option = ({
    option,
    selectThisOption,
    searchTextValue,
    setDropdownIsOpen
}) => {

    const [hovered, setHovered] = useState(false)

    const renderOption = () => (
        <>
            {
                (option.value + ' ').toLowerCase().startsWith(searchTextValue.toLowerCase()) &&
                <Pressable
                    style={[
                        styles.option, 
                        hovered ? globalStyles.onHoverClickable : 
                        null
                    ]}
                    onPress={()=> {
                        selectThisOption()
                        setDropdownIsOpen(false)
                    }}
                    onHoverIn={() => setHovered(true)}
                    onHoverOut={() => setHovered(false)}
                >
                    <Text 
                        style={[
                            styles.text, 
                            hovered ? globalStyles.onHoverClickable : 
                            styles.normal
                        ]}
                    >
                        {option.value}
                    </Text>
                </Pressable>
            }
        </>
    )
    

    return renderOption()
}

export default Option
