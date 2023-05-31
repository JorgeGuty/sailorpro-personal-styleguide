import React, { useEffect, useState } from 'react'
import { View } from 'react-native-web'

import styles from './Column.style'
import Header from '../Header/Header'
import Record from '../Record/Record'

const Column = ({
    configuration,
    recordsToRender,
    pageRecords, 
    firstColumn,
    setThisColumnsRecordIndexesToShow,
    rowClickConfiguration,
    setHoveredRecordIndex,
    currentHoveredRecordIndex,
}) => {

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        modifyFilteredIndexes()
    }, [searchValue])

    const modifyFilteredIndexes = () => {
        const attributeToFilter = configuration.attributeName

        const indexesToRender = []
        pageRecords.forEach((record, index) => {
            const isToBeRendered = (record[attributeToFilter] + ' ').toLowerCase().startsWith(searchValue.toLowerCase())
            if (isToBeRendered) {
                indexesToRender.push(index)
            }
        })

        setThisColumnsRecordIndexesToShow(indexesToRender)
    }

    const renderRecords = () => {
        return recordsToRender.map((record, index) => {
            return (
                <Record
                    key={index}
                    record={record}
                    index={index}
                    attributeName={configuration.attributeName}
                    renderAttributeValue={configuration.renderAttributeValue}
                    onClick={() => rowClickConfiguration.onClickRow(record[rowClickConfiguration.identifierAttribute])}
                    setHoveredRecordIndex={setHoveredRecordIndex}
                    currentHoveredRecordIndex={currentHoveredRecordIndex}
                />
            )
        })
    }

    return (
        <View
            style={[
                styles.column,
                firstColumn ? styles.firstColumn : null
            ]}
        >
            <Header
                columnName={configuration.name}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            {
                renderRecords()
            }
        </View>
    )
}

export default Column