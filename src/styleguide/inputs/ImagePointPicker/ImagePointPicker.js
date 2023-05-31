import React, {useEffect, useRef, useState, ReactDOM} from 'react'

import { ImageDisplay } from '../../components/ImageDisplay/ImageDisplay'
import { View } from 'react-native-web'
import { Mark } from './Components/Mark/Mark'
import { Menu } from './Components/Menu/Menu'
import SPInput from '../Input'

import {default as markStyles} from './Components/Mark/Mark.style'
import styles from './ImagePointPicker.style'

const SPImagePointPickerInput = ({
    height = 400, // TODO: constant
    source,
    markOptions,
    currentMarks = [],
    onChangeValue,
    disabled,
    label,
    required
}) => {
  
    const [placedMarks, setPlacedMarks] = useState([])
    const [imageDimensions, setImageDimensions] = useState(null)
    const [selectedMark, setSelectedMark] = useState(markOptions[0])
    
    const imageRef = React.createRef()

    useEffect(() => {
        if (imageDimensions !== null) {
            setPlacedMarks(currentMarks)
        }
    }, [imageDimensions])

    useEffect(() => {        
        window.addEventListener("resize", () => {
            console.log('resize', imageRef.current)
        })              
    }, [imageRef.current ? imageRef.current.offsetLeft : null])

    const onLoadImage = () => {
        const dimensionsObject = {
            height: imageRef.current.height,
            width: imageRef.current.width,
            offsetLeft: imageRef.current.offsetLeft
        }        
        setImageDimensions(dimensionsObject)    
        makeImageNotDraggable()    
    }

    const renderMarks = () => {
        return placedMarks.map((mark, index) => {
            return (            
                <Mark
                    key={index}
                    mark={mark}
                    removeThisMark={() => removeMark(index)}
                    getThisMarkPosition={() => getMarkPosition(mark)}
                />
            )
        });
    }

    const removeMark = (indexToRemove) => {
        const filteredIcons = [...placedMarks].filter((icon, index) => {
            return index !== indexToRemove
        })
        
        setPlacedMarks(filteredIcons)
    }    

    const getMarkPosition = (mark) => {
        const markPosition = {
            top: (mark.coordinates.y * imageDimensions.height) - markStyles.mark.fontSize / 2,
            left: ((mark.coordinates.x * imageDimensions.width) + imageDimensions.offsetLeft) - markStyles.mark.fontSize / 2,  
        }
        return markPosition
    }

    const contentIsEmpty = () => {
        return placedMarks === []
    }

    const contentIsValid = () => {
        return true
    }

    // NOT COMPATIBLE WITH REACT NATIVE
    const onClickImage = (event) => {
        if (!disabled) {
            addMark(event)
        }
    }

    // NOT COMPATIBLE WITH REACT NATIVE
    const addMark = (event) => {
        const newPlacedMarks = [...placedMarks]
        const markToPlace = {...selectedMark}

        const rect = event.target.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        markToPlace.coordinates = {
            y: y / imageDimensions.height,
            x: x / imageDimensions.width,
        }

        newPlacedMarks.push(markToPlace)
        setPlacedMarks(newPlacedMarks)
    }

    // NOT COMPATIBLE WITH REACT NATIVE
    const makeImageNotDraggable = () => {
        imageRef.current.style['-webkit-user-drag'] = 'none'
    }

    return (
        <SPInput
            removeHorizontalPadding
            contentIsEmpty={contentIsEmpty}
            contentIsValid={contentIsValid}
            onChangeValue={onChangeValue}    
            disabled={disabled}         
            label={label}
            required={required}
            value={placedMarks}
        >
            <View
                onContextMenu = {(event) => event.preventDefault()}
                style={styles.imagePointPicker}
                disabled={disabled}
            >   
                {
                    [                        
                        <ImageDisplay
                            key={0}
                            height={height}
                            source={source}
                            onClick={onClickImage}
                            style={styles.image}
                            ref={imageRef} 
                            onLoad={onLoadImage}
                            draggable={false}
                        />
                        ,
                        disabled &&
                        <View
                            key={1}
                            style={styles.disabledScreen}
                        />
                    ] 
                }                        
                <Menu
                    markOptions={markOptions}
                    selectedMark={selectedMark}
                    setSelectedMark={setSelectedMark}
                    clearAllMarks={() => setPlacedMarks([])}
                />   
                {
                    renderMarks()
                }         
            </View>
        </SPInput>
        
    )
}

export default SPImagePointPickerInput