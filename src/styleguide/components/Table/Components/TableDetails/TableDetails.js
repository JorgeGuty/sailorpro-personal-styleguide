import React from 'react'
import { BodyRegular3 } from '../../../../constants/fonts'

import { useTranslation } from 'react-i18next'

const TableDetails = ({
    totalRecordsQuantity,
}) => {

    const { t } = useTranslation()
    
    return (
        <BodyRegular3>
            {`${totalRecordsQuantity} ${t('RECORDS')} ${t('LOADED')}`}
        </BodyRegular3>
    )
}

export default TableDetails