import React, { useState } from 'react'
import { Pressable } from 'react-native-web'
import Icon from '../../Icon/Icon'
import { default as iconStyles } from '../../Icon/Icon.style'
import styles from './ToggleButton.style'

export const ToggleButton = ({
  mode,
  disabled,
  isOn,
  setIsOn
}) => {

  const iconOn = mode === 'SWITCH' ? 'toggle_on' : 'check_box'
  const iconOff = mode === 'SWITCH' ? 'toggle_off' : 'check_box_outline_blank'

  const [focused, setFocused] = useState(false)

  const toggle = () => {
    setIsOn(!isOn)
  }

  return (
      <Pressable
        onPress={toggle}
        disabled={disabled}
        style={styles.toggle}     
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {
          isOn ? 
          <Icon
              fontFamily={'Material Icons'}
              name={iconOn}
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
            name={iconOff}
            iconBrand = {'MATERIAL_ICONS'}
            style={[
              iconStyles.bigIcon,
              iconStyles.textIcon,
              disabled ? styles.disabled : styles.off
            ]}                            
          />
        }
      </Pressable>
  )

}
