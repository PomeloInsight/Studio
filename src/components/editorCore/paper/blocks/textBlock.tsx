import React, { createRef } from 'react';
import { Editor, EditorState } from 'draft-js';

import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';

interface ITextBlockProps {
  block: IEditorCoreTextBlock;
}

interface ITextBlockState {
  editorState: EditorState;
}

class TextBlock extends BaseBlock<ITextBlockProps, ITextBlockState> {
  editorRef = createRef<Editor>();

  state = {
    editorState: this.props.block.editorState,
  };

  onChange = (editorState: EditorState) => {
    this.setState({
      editorState,
    });
  };

  needFocus() {
    this.editorRef.current?.focus();
  }

  content() {
    const { editorState } = this.state;

    return (
      <div>
        <Editor editorState={editorState} onChange={this.onChange} ref={this.editorRef} />
      </div>
    );
  }
}

export { TextBlock };
