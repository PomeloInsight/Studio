import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

import css from 'src/components/editorCore/paper/blocks/block.scss';

class BaseBlock extends Component<IEditorCoreBaseBlockProps, IEditorCoreBaseBlockState> {
  state = {
    editorState: this.props.block.initialEditorState,
  };

  onChange = (newState: EditorState) => {
    this.setState({
      editorState: newState,
    });
  };

  render() {
    return (
      <div className={css.block}>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export { BaseBlock };
