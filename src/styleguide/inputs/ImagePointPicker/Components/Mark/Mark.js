import React, { useState } from 'react'

import {View} from 'react-native-web'
import Icon from '../../../../components/Icon/Icon'

import styles from './Mark.style'
import SPMultilineTextInput from '../../../MultilineText/MultilineText'

import { useTranslation } from 'react-i18next'
import Dropdown from '../../../../components/Dropdown/Dropdown'
import { TextButton } from '../../../../components/Buttons/TextButton/TextButton'

export const Mark = ({
    mark,
    removeThisMark,
    getThisMarkPosition
}) => {

    const [enterDescriptionBoxOpened, setEnterDescriptionBoxOpened] = useState(false)
    const [deleteConfirmationModalOpened, setDeleteConfirmationModalOpened] = useState(false)
    const { t } = useTranslation()

    const removeMarkProc = () => {
        setDeleteConfirmationModalOpened(false)
        removeThisMark()
    }

    return (
        <View
            style={[
                styles.mark,
                getThisMarkPosition()
            ]}
            onContextMenu={(event) => {
                if (!enterDescriptionBoxOpened) {
                    setDeleteConfirmationModalOpened(true)
                }
            }}
        >
            <Icon
                fontFamily={mark.icon.fontFamily}
                name={mark.icon.name}
                iconBrand = {mark.icon.iconBrand}
                style={[
                    {                                                                
                        color: mark.color,
                        fontSize: 'inherit'
                    }
                ]}
                description={mark.description}   
                onClick={() => setEnterDescriptionBoxOpened(true)}                  
            /> 
            <Dropdown
                isOpen={enterDescriptionBoxOpened}
                setIsOpen={setEnterDescriptionBoxOpened}
                style={styles.markDropdown}
            >
                <SPMultilineTextInput
                    placeholder={t("ENTER_DESCRIPTION")}
                    value={mark.description}
                    onChangeValue={(content) => {
                        mark.description = content
                    }}
                    allowEmptyContent={true}
                    onBlur={() => setEnterDescriptionBoxOpened(false)}
                />
            </Dropdown>
            <Dropdown
                isOpen={deleteConfirmationModalOpened}
                setIsOpen={setDeleteConfirmationModalOpened}
                style={[styles.markDropdown, styles.deleteConfirmation]}
            >
                <TextButton
                    onClick={() => setDeleteConfirmationModalOpened(false)}
                    style={'SECONDARY'}
                    small={true}
                >
                    {t('CANCEL')}
                </TextButton>
                <TextButton
                    onClick={removeMarkProc}
                    style={'PRIMARY'}
                    small={true}
                >
                    {t('DELETE_MARK')}
                </TextButton>
            </Dropdown>
        </View>
    )
}


