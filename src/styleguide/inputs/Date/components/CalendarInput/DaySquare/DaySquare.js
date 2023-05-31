import React, { useState, useEffect } from 'react'
import { SquareButton } from '../../../../../components/Buttons/SquareButton/SquareButton'

import {default as globalStyles} from '../../../../Input.style'



export const DaySquare = ({
    day,
    clickedDay,
    clickedMonth,
    setClickedDay
}) => {
    
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if (clickedDay !== null){
            setSelected(day.getDate() === clickedDay.getDate() && day.getMonth() === clickedDay.getMonth())        
        }
        else {
            setSelected(false) 
        }
    }, [clickedDay, clickedMonth])

    const onClick = () => {
        setClickedDay(day)
    }

    return (         
        <SquareButton
            disabled={clickedMonth !== day.getMonth()  }  
            disabledStyle={globalStyles.default}
            selectedStyle={globalStyles.highlighted}
            hoveredStyle={globalStyles.onHoverClickable}
            selected={selected}
            onClick={onClick}
        >
            {day.getDate()}
        </SquareButton>
    )
}
