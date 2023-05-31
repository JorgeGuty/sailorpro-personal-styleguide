import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native-web'

import Column from './Components/Column/Column'
import TableDetails from './Components/TableDetails/TableDetails'

import styles from './Table.style'
import {default as recordStyles} from './Components/Record/Record.style'

const Table = ({
    columnConfigurations,
    records,
    pageSize,
    onClickConfiguration,
}) => {

    const [recordsToRender, setRecordsToRender] = useState(records)
    const [hoveredRecordIndex, setHoveredRecordIndex] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    // Segun filtro individual por columna, los indices que segun ese filtro se muestran
    const [recordsToShowIndexesByColumn, setRecordsToShowIndexesByColumn] = useState({})

    useEffect(() => {        
        filterRecords()
    }, [recordsToShowIndexesByColumn])

    const filterRecords = () => {
        const recordIndexesToRender = findIndexesToRender()

        const newRecordsToRender = [...records].filter((record, index) => {
            return recordIndexesToRender.includes(index)
        })
        
        setRecordsToRender(newRecordsToRender)
    }

    const findIndexesToRender = () => {
        
        if (Object.values(recordsToShowIndexesByColumn).length === 0) {
            return records.map((_, index) => index);
        }
            
        const intersection = Object.values(recordsToShowIndexesByColumn).reduce((a, b) => {
            return a.filter(value => b.includes(value));
        });

        return Array.from(new Set(intersection));
    }

    const modifyColumnsRecordIndexesToShow = (filteredIndexes, columnId) => {
        const modifiedFilteredIndexes = {...recordsToShowIndexesByColumn}
        modifiedFilteredIndexes[columnId] = filteredIndexes
        setRecordsToShowIndexesByColumn(modifiedFilteredIndexes)
    }

    const renderColumns = () => {
        return columnConfigurations.map((columnConfiguration, index) => {
            return (
                <Column
                    key = { index }
                    firstColumn={  index === 0 }
                    recordsToRender = { recordsToRender }
                    pageRecords = { records }
                    setThisColumnsRecordIndexesToShow = { (filteredIndexes) => modifyColumnsRecordIndexesToShow(filteredIndexes, index) }
                    configuration = { columnConfiguration }   
                    rowClickConfiguration = { onClickConfiguration }        
                    setHoveredRecordIndex={setHoveredRecordIndex}
                    currentHoveredRecordIndex={hoveredRecordIndex}
                />
            )
        })
    }

    return (
        <View
            style={styles.wrapper}
        >
            <View
                style={[styles.table]}
            >
                {
                    renderColumns()
                }
            </View>
            <View
                style={styles.footer}
            >
                <TableDetails
                    totalRecordsQuantity = {records.length}                
                />
            </View>
        </View>        
    )
}

export default Table