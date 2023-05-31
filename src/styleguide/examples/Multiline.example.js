import React from 'react'
import SPMultilineTextInput from '../inputs/MultilineText/MultilineText'

export const MultilineExample = () => {
  return (
    <div>
        <SPMultilineTextInput
            maxCharacters={10}
            // disabled={true}
            label={'Describa expediente'}
            onChangeValue={(content) => console.log('Handling...', content)}
            placeholder={'Escriba aqui'}
            required={true}
            resize={false}
        ></SPMultilineTextInput>               
    </div>
  )
}
