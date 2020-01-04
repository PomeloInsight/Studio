import React from 'react';
import { Editor, EditorState } from 'draft-js';

import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';

interface ITextBlockProps {
  block: IEditorCoreTextBlock;
}

interface ITextBlockState {
  editorState: EditorState;
}

class TextBlock extends BaseBlock<ITextBlockProps, ITextBlockState> {
  state = {
    editorState: this.props.block.editorState,
  };

  onChange = (editorState: EditorState) => {
    this.setState({
      editorState,
    });
  };

  content() {
    const { editorState } = this.state;

    return (
      <div>
        <Editor editorState={editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export { TextBlock };
