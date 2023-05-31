import { useEffect, useState } from "react";
import { ToggleButton } from "../../components/Buttons/ToggleButton/ToggleButton";
import { Label } from "../../constants/fonts";
import { View } from "react-native-web";
import styles from "./Toggle.style";

/**
 * Toggle Input
 * @param {string} props.label - Label to be added on top of the input
 * @param {boolean} props.required - Whether or not the input value is required
 * @param {Function} props.onChangeValue - (boolean) => {} - Handle called on every toggle change and also at the beginning
 * @param {boolean} props.disabled - Boolean to determine if its disabled
 * @param {boolean} props.value - Boolean to be added as initial value of the input, defaults to 'false', can be a hook that determines the value of the input from outside.
 * @param {string} props.type - String that determines the checker type of the toggle. 
 */
const SPToggleInput = ({
   label,
   required,
   onChangeValue, 
   disabled,
   value = false,
   type
}) => {

    const [changedValue, setChangedValue] = useState(false)
    const [isOn, setIsOn] = useState(value)

    useEffect(() => {
        if(changedValue && onChangeValue) {
            onChangeValue(isOn)
        }
        else {
            setChangedValue(true)
        }
    }, [isOn])

    useEffect(() => {
        setIsOn(value)
    }, [value])

    function renderSwitch() {

        return (
            <View
                style={styles.input}
            >                
                <ToggleButton
                    mode = {type}
                    disabled = {disabled}
                    isOn = {isOn}
                    setIsOn = {setIsOn}
                />
                {
                    label &&
                    <Label style={disabled ? styles.disabled : null}>{label + (required ? '*' : '')}</Label>
                }
            </View>
        )
    }

    return renderSwitch()
}
  
export default SPToggleInput;