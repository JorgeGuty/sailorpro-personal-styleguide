import React, {forwardRef, useEffect, useState} from 'react'
import {  View } from 'react-native-web'

import { Image } from '../Wrappers/Image/Image'

import styles from './ImageDisplay.style'

export const ImageDisplay = forwardRef(({
    height,
    source,
    onClick,
    style,
    onLoad,
},  ref) => {
  return (
    <View
        style={[styles.container, {height: height}]}    
    > 
        <Image
            onClick={onClick}        
            source={source}
            style={style}
            ref={ref}
            onLoad={onLoad}
        />
    </View>
  )
})
