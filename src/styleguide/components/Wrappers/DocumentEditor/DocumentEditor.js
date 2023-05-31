import React, { useState, useEffect, useRef } from 'react'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import './DocumentEditor.css'

const DocumentEditor = ({
    contentState,
    setContentState
}) => {
    const editorElementRef = useRef(null)

    useEffect(() => {
        if (editorElementRef.current) {
          DecoupledEditor.create(editorElementRef.current.querySelector('.document-editor__editable'), {
              toolbar: {
                  items: [
                      'undo', 'redo',
                      '|', 'heading',
                      '|', 'bold', 'italic',
                      '|', 'link', 'insertTable',
                      '|', 'bulletedList', 'numberedList', 'outdent', 'indent'
                  ]
              },
              autosave: {
                  save( editor ) {
                      return saveData( editor.getData() );
                  }
              }
          })
          .then(editor => {
                editor.setData(contentState);
                
                const toolbarContainer = editorElementRef.current.querySelector('.document-editor__toolbar')
                toolbarContainer.appendChild(editor.ui.view.toolbar.element)

                const documentContentContainer = editorElementRef.current.querySelector('.document-editor__editable')
                
                // create a new instance of 'MutationObserver' named 'observer', 
                // passing it a callback function
                const observer = new MutationObserver((mutationsList, observer) => {
                    setContentState(documentContentContainer.innerHTML)
                });
 
                observer.observe(documentContentContainer, { characterData: true, childList: true, subtree: true });

          })
          .catch( err => {
              console.error( err )
          } );        
        }
      }, []);

    const saveData = ( data ) => {
        return new Promise( (resolve, reject) => {
            try {
                setContentState(data)
                resolve()
            }
            catch (e) {
                console.error(e)
                reject()
            }
        })
    }

    return (
        <div ref={editorElementRef} class="document-editor">
            <div class="document-editor__toolbar"></div>
            <div class="document-editor__editable-container">
                <div class="document-editor__editable">
                </div>
            </div>
        </div>
    )
}

export default DocumentEditor