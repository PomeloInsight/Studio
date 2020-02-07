import React, { FunctionComponent, useState } from 'react';
import { Editor, EditorState } from 'draft-js';

import { ParagraphBlockData } from 'src/components/editorCore/sketch/blocks/definition';
import { base } from 'src/components/editorCore/sketch/blocks/base';

import css from 'src/components/editorCore/sketch/blocks/block.scss';


type ParagraphBlockProps = {
  data: ParagraphBlockData
}


const Paragraph: FunctionComponent<ParagraphBlockProps> = base(({ data }) => {
  const [editorState, updateEditorState] = useState(data.editorState);

  const onChange = (newEditorState: EditorState) => updateEditorState(newEditorState);

  return (
    <div className={ css.textBlock }>
      <Editor editorState={ editorState } onChange={ onChange }/>
    </div>
  );
});


export { Paragraph };
