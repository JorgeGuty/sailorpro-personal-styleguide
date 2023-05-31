import React from 'react'
import { View, Text } from 'react-native-web'
import styles from './Header.style'
import { BodyBold2 } from '../../../../constants/fonts'
import SPTextInput from '../../../../inputs/Text/Text'
import { useTranslation } from 'react-i18next'

const Header = ({
    columnName,
    setSearchValue,
}) => {

    const { t } = useTranslation()

    const updateSearchValue = (inputValue) => {
        setSearchValue(inputValue)
    }

    return (
        <View
            style={styles.header}
        >
            <BodyBold2>{columnName}</BodyBold2>
            <SPTextInput
                onChangeValue={updateSearchValue}
                placeholder={t("SEARCH")}
                icon={{
                    name: "search",
                    fontFamily: 'Material Symbols Outlined',
                    iconBrand: 'MATERIAL_ICONS',
                }}
                placeIconRight={true}
            />
        </View>
    )
}

export default Header