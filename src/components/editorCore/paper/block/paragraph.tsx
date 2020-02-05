import React, { createRef } from 'react';
import { Editor, EditorState } from 'draft-js';

import { Base } from 'src/components/editorCore/paper/block/base';

import css from 'src/components/editorCore/paper/block/block.scss';

interface IParagraphProps {
  block: IParagraphBlock;
}

interface IParagraphState {
  editorState: EditorState;
}

class Paragraph extends Base<IParagraphProps, IParagraphState> {
  blockRef = createRef<HTMLDivElement>();

  editorRef = createRef<Editor>();

  state = {
    editorState: this.props.block.editorState,
  };

  focus = () => this.editorRef.current?.focus();

  canFocusNear = (mode: 'prev' | 'next') => {
    const contentState = this.state.editorState.getCurrentContent();
    const blocks = contentState.getBlocksAsArray();
    const selectionState = this.state.editorState.getSelection();
    if (!selectionState.isCollapsed()) return false;
    if (mode === 'prev' && blocks[0].getKey() === selectionState.getAnchorKey()) return true;
    return mode === 'next' && blocks[blocks.length - 1].getKey() === selectionState.getAnchorKey();
  };

  onChange = (editorState: EditorState) => {
    this.setState({
      editorState,
    });
  };

  paint = () => (
    <div ref={this.blockRef} className={css.textBlock}>
      <Editor editorState={this.state.editorState} onChange={this.onChange} ref={this.editorRef} />
    </div>
  );
}

export { Paragraph, IParagraphProps };
