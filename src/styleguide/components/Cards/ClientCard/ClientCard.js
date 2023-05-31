import React from 'react'
import { View } from 'react-native-web'
import styles from './ClientCard.style'
import { BodyBold1, BodyBold3 } from '../../../constants/fonts'
import Icon from '../../Icon/Icon'
import InfoField from './InfoField/InfoField'

const ClientCard = ({
    name,
    clientTypeIcon,
    clientType,
    idIcon,
    id,
    email,
    phone,
    flexVal,
}) => {
  return (
    <View
        style={[styles.card, {flex: flexVal}]}
    >
        <View
            style={styles.colorBar}
        />
        <View
            style={styles.body}
        >
            <View
                style={styles.infoField}
            >
                <Icon
                    fontFamily = {clientTypeIcon.fontFamily}
                    name = {clientTypeIcon.name}
                    iconBrand = {clientTypeIcon.iconBrand}                
                    style={styles.clientType}  
                />
                <BodyBold3
                    style={styles.clientType}
                >{clientType}</BodyBold3>
            </View>
            <BodyBold1>{name}</BodyBold1>
            <InfoField
                icon={idIcon}
                text={id}
            />
            <InfoField
                icon={{
                    fontFamily: "Material Symbols Outlined",
                    name: "email",
                    iconBrand: 'MATERIAL_ICONS',                
                }}
                text={email}
            />
            <InfoField
                icon={{
                    fontFamily:"Material Symbols Outlined",
                    name:"phone",
                    iconBrand:'MATERIAL_ICONS',            
                }}
                text={phone}
            />
        </View>
    </View>
  )
}

export default ClientCard