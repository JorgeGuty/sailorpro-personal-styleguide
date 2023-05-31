import React from 'react'
import { IconButton } from '../components/Buttons/IconButton/IconButton'
import { IconTextButton } from '../components/Buttons/IconTextButton/IconTextButton'
import { TextButton } from '../components/Buttons/TextButton/TextButton'

export const MainButtonExample = () => {
  return (
    <div
        style={{
          display: "flex"  ,
          flexDirection:'column',
          gap: 8
        }}
    >
        <IconButton
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}
            style={'PRIMARY'}
            onClick={() => console.log('click')}
            small={true}
            disabled={false}
            truncated={true}
        />
        <IconButton
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}
            style={'SECONDARY'}
            onClick={() => console.log('click')}
            small={false}
            disabled={false}
            truncated={true}
        />   
        <IconButton
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}
            style={'TERTIARY'}
            onClick={() => console.log('click')}
            small={false}
            disabled={false}
            truncated={true}
        />  
        <IconButton
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}
            style={'PRIMARY'}
            onClick={() => console.log('click')}
            small={false}
            disabled={true}
            truncated={true}
        />
        <IconButton
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}
            style={'SECONDARY'}
            onClick={() => console.log('click')}
            small={false}
            disabled={true}
            truncated={true}
        />   
        <IconButton
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}
            style={'TERTIARY'}
            onClick={() => console.log('click')}
            small={false}
            disabled={true}
            truncated={true}
        />
        <br></br>
        <IconTextButton
            onClick={() => console.log('click')}
            style={'PRIMARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={true}
            text={'Texto'} 
            small={true}
            disabled={false}        
            truncated={true}    
        />
        <IconTextButton
            onClick={() => console.log('click')}
            style={'SECONDARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={true}
            text={'Texto'}
            small={false}
            disabled={false}    
            truncated={true}        
        />    
        <IconTextButton
            onClick={() => console.log('click')}
            style={'TERTIARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={true}
            text={'Texto'}
            small={false}
            disabled={false}   
            truncated={true}         
        />     
 <IconTextButton
            onClick={() => console.log('click')}
            style={'PRIMARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={true}
            text={'Texto'}
            small={false}
            disabled={true}        
            truncated={true}    
        />
        <IconTextButton
            onClick={() => console.log('click')}
            style={'SECONDARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={true}
            text={'Texto'}
            small={false}
            disabled={true}    
            truncated={true}        
        />    
        <IconTextButton
            onClick={() => console.log('click')}
            style={'TERTIARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={true}
            text={'Texto'}
            small={false}
            disabled={true}   
            truncated={true}         
        />                
        <br></br>
        <IconTextButton
            onClick={() => console.log('click')}
            style={'PRIMARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={false}
            text={'Texto'}
            small={false}
            disabled={false}        
            truncated={true}    
        />
        <IconTextButton
            onClick={() => console.log('click')}
            style={'SECONDARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={false}
            text={'Texto'}
            small={false}
            disabled={false}    
            truncated={false}        
        />    
        <IconTextButton
            onClick={() => console.log('click')}
            style={'TERTIARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={false}
            text={'Texto'}
            small={false}
            disabled={false}   
            truncated={false}         
        /> 
        <IconTextButton
            onClick={() => console.log('click')}
            style={'PRIMARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={false}
            text={'Texto'}
            small={false}
            disabled={true}        
            truncated={true}    
        />
        <IconTextButton
            onClick={() => console.log('click')}
            style={'SECONDARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={false}
            text={'Texto'}
            small={false}
            disabled={true}    
            truncated={true}        
        />    
        <IconTextButton
            onClick={() => console.log('click')}
            style={'TERTIARY'}
            icon={{
                name: "add",
                fontFamily: 'Material Symbols Outlined',
                iconBrand: 'MATERIAL_ICONS',
            }}            
            placeIconRight={false}
            text={'Texto'}
            small={false}
            disabled={true}   
            truncated={true}         
        />
        <br></br> 
        <TextButton
            onClick={() => console.log('click')}
            style={'PRIMARY'}
            small={false}
            disabled={false}   
            truncated={true}
        >{'Texto'}</TextButton>
        <TextButton
            onClick={() => console.log('click')}
            style={'PRIMARY'}
            small={false}
            disabled={false}   
            truncated={true}
        >{'Texto'}</TextButton>
        <TextButton
            onClick={() => console.log('click')}
            style={'PRIMARY'}
            small={false}
            disabled={false}   
            truncated={true}
        >{'Texto'}</TextButton>                
        <br></br>                   
    </div>
  )
}
