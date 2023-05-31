import React  from 'react'
import SPImagePointPickerInput from '../inputs/ImagePointPicker/ImagePointPicker'

const ImagePointPickerExample = () => {

    return (
        <>
            <SPImagePointPickerInput
                height={500}
                source={'https://101trading.co.uk/wp-content/uploads/2015/04/horizon_00364590-1030x412.jpg'}
                markOptions={[
                    {
                        icon: {
                            fontFamily: "Material Icons",
                            name: "error",
                            iconBrand: 'MATERIAL_ICONS',
                        },
                        color: 'red'
                    },
                    {
                        icon: {
                            fontFamily: "Material Icons",
                            name: "error",
                            iconBrand: 'MATERIAL_ICONS',
                        },
                        color: 'blue'
                    },
                    {
                        icon: {
                            fontFamily: "Material Icons",
                            name: "error",
                            iconBrand: 'MATERIAL_ICONS',
                        },
                        color: 'yellow'
                    },
                    {
                        icon: {
                            fontFamily: "Material Icons",
                            name: "error",
                            iconBrand: 'MATERIAL_ICONS',
                        },
                        color: 'green'
                    }
                ]}
                currentMarks={[
                    {
                        "icon": {
                            "fontFamily": "Material Icons",
                            "name": "error",
                            "iconBrand": "MATERIAL_ICONS"
                        },
                        "color": "red",
                        "coordinates": {
                            "y": 0.08179998779296875,
                            "x": 0.108
                        },
                    },
                    {
                        "icon": {
                            "fontFamily": "Material Icons",
                            "name": "error",
                            "iconBrand": "MATERIAL_ICONS"
                        },
                        "color": "green",
                        "coordinates": {
                            "y": 0.5,
                            "x": 0.1
                        }
                    },
                    {
                        "icon": {
                            "fontFamily": "Material Icons",
                            "name": "error",
                            "iconBrand": "MATERIAL_ICONS"
                        },
                        "color": "yellow",
                        "coordinates": {
                            "y": 0.5,
                            "x": 0.5
                        }
                    },
                    {
                        "icon": {
                            "fontFamily": "Material Icons",
                            "name": "error",
                            "iconBrand": "MATERIAL_ICONS"
                        },
                        "color": "blue",
                        "coordinates": {
                            "y": 1,
                            "x": 1
                        }
                    }
                ]}
                onChangeValue={(placedMarks) => console.log('Handling...', placedMarks)}
                label={"Ponga puntos"}
                disabled={false}
                required={true}
            />
        </>
    )
}

export default ImagePointPickerExample