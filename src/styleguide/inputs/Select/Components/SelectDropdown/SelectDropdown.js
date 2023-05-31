import React, {useEffect, useState} from 'react'
import { View, ScrollView } from 'react-native-web'
import styles from './SelectDropdown.style'
import SPTextInput from '../../../Text/Text'
import Option from '../Option/Option'
import Dropdown from '../../../../components/Dropdown/Dropdown'

import {default as globalStyles} from '../../../Input.style'

import { useTranslation } from 'react-i18next'
import { BodyRegular2 } from '../../../../constants/fonts'

const SelectDropdown = ({
    searchable,
    options,
    selectOption,
    setDropdownIsOpen,
    isOpen
}) => {
  
    const [searchText, setSearchText] = useState('')
    const { t } = useTranslation()
    
    const renderOptions = () => {
        return getSortedOptions().map((option) => {
            return (
                <Option
                    key={option.key}
                    selectThisOption={() => selectOption(option)}
                    option={option}
                    searchTextValue={searchText}
                    setDropdownIsOpen={setDropdownIsOpen}
                />
            )
        })
    }

    const getSortedOptions = () => {
        const sortedOptions = [...options]
        sortedOptions.sort((a, b) => {
            const valueA = a.value.toUpperCase();
            const valueB = b.value.toUpperCase();
            if (valueA < valueB) {
            return -1;
            }
            if (valueA > valueB) {
            return 1;
            }
            return 0;
        })
        return sortedOptions
    }

    const updateSearchText = (searchText) => {
        setSearchText(searchText)
    }

    const renderDropdown = () => (
        <Dropdown            
            matchParentsWidth={true}
            isOpen={isOpen}
            setIsOpen={setDropdownIsOpen}
            style={[
                globalStyles.inputDropdown,
                styles.dropdown
            ]}
        >
            {
                searchable && 
                <SPTextInput
                    // TODO: i18n
                    placeholder={t("SEARCH")}
                    icon={{
                        name: "search",
                        fontFamily: 'Material Symbols Outlined',
                        iconBrand: 'MATERIAL_ICONS',
                    }}
                    placeIconRight={true}
                    onChangeValue={updateSearchText}  
                />
            }
            <View 
                style={[styles.options]}
            >
                {
                    options.length > 0 ?
                    renderOptions()
                    : 
                    <BodyRegular2
                        style={globalStyles.default}
                    >{t('NOTHING_TO_SHOW')}</BodyRegular2>
                }
            </View>
        </Dropdown>  
    )

    return renderDropdown()
}

export default SelectDropdown
