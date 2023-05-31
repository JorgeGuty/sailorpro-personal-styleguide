import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native-web'

import Icon from '../../../../components/Icon/Icon'
import { default as iconStyles } from '../../../../components/Icon/Icon.style'
import { Label } from '../../../../constants/fonts'

import styles from './Option.style'

export const UniqueSelectionOption = ({
    selectThisOption,
    thisOptionIsSelected,
    selectedOption,
    disabled,
    option,
}) => {

    const [isSelected, setIsSelected] = useState(thisOptionIsSelected())
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        setIsSelected(thisOptionIsSelected())        
    }, [selectedOption])

  return (
    <Pressable
        onPress={selectThisOption}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={styles.option}
    >
        {
          isSelected ? 
          <Icon
              fontFamily={'Material Icons'}
              name={'radio_button_checked'}
              iconBrand = {'MATERIAL_ICONS'}
              style={[
                iconStyles.bigIcon,
                iconStyles.textIcon,
                disabled ? styles.disabled : focused ? styles.onFocused : styles.onBlured
              ]}  
          />
          :
          <Icon
            fontFamily={'Material Icons'}
            name={'radio_button_unchecked'}
            iconBrand = {'MATERIAL_ICONS'}
            style={[
              iconStyles.bigIcon,
              iconStyles.textIcon,
              disabled ? styles.disabled : styles.off
            ]}                            
          />
        }
        <Label style={disabled ? styles.disabled : null}>{option.value}</Label>
    
    </Pressable>
  )
}
