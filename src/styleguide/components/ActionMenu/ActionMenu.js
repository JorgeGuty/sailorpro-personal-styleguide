import React from 'react'
import { View } from 'react-native-web'
import styles from './ActionMenu.style'
import FloatingButton from '../Buttons/FloatingButton/FloatingButton'

const ActionMenu = ({
    buttons
}) => {

    const renderButtons = () => {
        return buttons.map((button, index) => {
            return (
                <FloatingButton
                    key={index}
                    text={button.text}
                    onClick={button.onClick}
                    icon={button.icon}
                />
            )
        })
    }

    return (
        <View
            style={styles.menu}
        >
            {
                renderButtons()
            }
        </View>
    )
}

export default ActionMenu