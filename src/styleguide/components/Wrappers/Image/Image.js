import React, { forwardRef } from 'react'

export const Image = forwardRef(({
    source,
    onClick,
    style,    
    onLoad,
    draggable
},  ref) => {
  return (
    <img
      src={source}
      onClick={onClick}
      style={
        { 
          flex: 1,
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          userSelect: 'none',
          userDrag: 'none',
          ...style
        }
      }
      onLoad={onLoad}
      ref={ref}
      
    />
  )
})
