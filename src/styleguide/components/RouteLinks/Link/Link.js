import React, { useState } from 'react'
import { Pressable } from 'react-native-web'

import styles from './Link.style'
import { BodyBold2 } from '../../../constants/fonts'


const Link = ({
    text,
    navigateToDestination,
}) => {
  
    const [hovered, setHovered] = useState(false)

    return (
        <Pressable
            onPress={navigateToDestination}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={styles.link}
        >
            <BodyBold2
                style={[hovered ? styles.hoveredLinkText : styles.linkText, ]}
            >
                {text}
            </BodyBold2>
        </Pressable>
    )
}

export default Link