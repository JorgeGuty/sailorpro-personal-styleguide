import React, { useState, useEffect, useRef } from 'react'
import SPInput from '../Input'
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { View } from 'react-native-web';
import styles from './CKEditor.style';

import DocumentEditor from '../../components/Wrappers/DocumentEditor/DocumentEditor';

export const SPCKEditorInput = ({
    label,
    required, 
    onChangeValue,
    template = '',
    disabled
}) => {

    const [content, setContent] = useState(template)

    const contentIsValid = () => {
        return true
    }

    const contentIsEmpty = () => {
        return false
    }

    return (
        <SPInput
            contentIsEmpty={contentIsEmpty}
            contentIsValid={contentIsValid}
            onChangeValue={onChangeValue}
            label={label}
            required={required}
            disabled={disabled}
            value={content}
        >
            <View
                style={styles.container}
            >
                <DocumentEditor
                    contentState={content}
                    setContentState={setContent}
                />
            </View>
        </SPInput>
    )
}
	