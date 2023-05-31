import React, {useEffect, useState} from 'react'
import { SquareButton } from '../../../../../components/Buttons/SquareButton/SquareButton'

import {default as globalStyles} from '../../../../Input.style'

export const ValueSquare = ({
    value,
    clickedValue,
    setClickedValue
}) => {

    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if (clickedValue !== null) {
            setSelected(value === clickedValue)
        }
    }, [clickedValue])

    const onClick = () => {
        setClickedValue(value)
    }

    return (
        <SquareButton
            disabled={false}
            disabledStyle={globalStyles.default}
            selectedStyle={globalStyles.highlighted}
            hoveredStyle={globalStyles.onHoverClickable}
            selected={selected}
            onClick={onClick}
        >
            {value}
        </SquareButton>
    )
}
