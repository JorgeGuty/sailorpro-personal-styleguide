import React from 'react'
import SPToggleInput from '../inputs/Toggle/Toggle'

export const ToggleExample = () => {
  return (
    <div>
        <SPToggleInput
            label={"Radio toggle"}
            required={false}
            handleToggle={(value) => console.log('HANDLING...', value)}
            disabled={false}
            defaultValue={false}
        />
        <SPToggleInput
            label={"Radio toggle"}
            required={false}
            handleToggle={(value) => console.log('HANDLING...', value)}
            disabled={true}
            defaultValue={false}
        />
        <SPToggleInput
            label={"Radio toggle"}
            required={false}
            handleToggle={(value) => console.log('HANDLING...', value)}
            disabled={false}
            defaultValue={true}
        />
        <SPToggleInput
            label={"Switch toggle"}
            required={false}
            handleToggle={(value) => console.log('HANDLING...', value)}
            disabled={false}
            defaultValue={false}
            type={'SWITCH'}
        />
        <SPToggleInput
            label={"Switch toggle"}
            required={false}
            handleToggle={(value) => console.log('HANDLING...', value)}
            disabled={true}
            defaultValue={false}
            type={'SWITCH'}
        />
        <SPToggleInput
            label={"Switch toggle"}
            required={false}
            handleToggle={(value) => console.log('HANDLING...', value)}
            disabled={false}
            defaultValue={true}
            type={'SWITCH'}
        />   
        <SPToggleInput
            label={"Checkbox toggle"}
            required={false}
            handleToggle={(value) => console.log('HANDLING...', value)}
            disabled={false}
            defaultValue={false}
            type={'CHECKBOX'}
        />
        <SPToggleInput
            label={"Checkbox toggle"}
            required={false}
            handleToggle={(value) => console.log('HANDLING...', value)}
            disabled={true}
            defaultValue={false}
            type={'CHECKBOX'}
        />
        <SPToggleInput
            label={"Checkbox toggle"}
            required={false}
            handleToggle={(value) => console.log('HANDLING...', value)}
            disabled={false}
            defaultValue={true}
            type={'CHECKBOX'}
        />                             
    </div>
  )
}
	