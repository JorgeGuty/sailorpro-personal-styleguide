import React, {useEffect, useState} from 'react'
import { Pressable, View } from 'react-native-web'
import styles from './Dropdown.style'

/*
const propagateClickCoordinate = (cx,cy) => {
    var evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,

    });
    for(const element of document.getElementsByClassName("cell")){
        const  {x,y,width,height} = element.getBoundingClientRect()
        if(cx >= x && cx <= x+width && cy >= y && cy <= y+height)
            element.dispatchEvent(evt)
    }
}

*/

/**
 * Dropdown component
 * @param {ReactComponent} props.children - The content of the component. Goes as children of it.
 * @param {boolean} props.isOpen - Boolean to toggle the component.
 * @param {Function} props.setIsOpen - Setter function for the isOpen prop
 * @param {boolean} props.matchParentsWidth - If true, the width of the dropdown is going to match that of the parent container.
 * @param {Object} props.style - StyleSheet like styles to be added to the dropdown.
 *
 */

const Dropdown = ({
    children,
    isOpen,
    setIsOpen,
    matchParentsWidth,
    style
}) => {

    const onClickElsewhere = (event) => {
        setIsOpen(false)
    }

    const renderDropdown = () => isOpen && [
        <View 
            key={0}
            style={styles.transparentScreen} 
            onClick={onClickElsewhere}
        />,
        <Pressable
            key={1}
            style={[
                styles.dropdown,
                matchParentsWidth ? {width: '100%'} : null,
                style
            ]}
        >
            {
                children
            }
        </Pressable>
    ]

    return renderDropdown()
}

export default Dropdown
