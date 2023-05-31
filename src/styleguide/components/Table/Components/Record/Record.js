import React from 'react'
import { BodyRegular2 } from '../../../../constants/fonts'
import { Pressable } from 'react-native-web'
import styles from './Record.style'

const Record = ({
    record,
    attributeName,
    renderAttributeValue,
    index,
    setHoveredRecordIndex,
    currentHoveredRecordIndex,
    onClick,
}) => {

    const renderTextRecord = () => {
        return (
            <BodyRegular2>{record[attributeName]}</BodyRegular2>
        )
    }

    return (
        <Pressable
            style={[styles.record, currentHoveredRecordIndex === index ? styles.hoveredRecord : null]}
            onPress={onClick}
            onHoverIn={() => setHoveredRecordIndex(index)}
            onHoverOut={() => setHoveredRecordIndex(null)}
        >
            {
                renderAttributeValue ?
                    renderAttributeValue(record[attributeName])
                :   renderTextRecord()
            }
        </Pressable>
    )
}

export default Record