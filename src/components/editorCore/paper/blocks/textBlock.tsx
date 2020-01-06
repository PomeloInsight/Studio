import React, { createRef } from 'react';
import { Editor, EditorState } from 'draft-js';

import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';

import css from 'src/components/editorCore/paper/blocks/block.scss';

interface ITextBlockProps {
  block: IEditorCoreTextBlock;
}

interface ITextBlockState {
  editorState: EditorState;
}

class TextBlock extends BaseBlock<ITextBlockProps, ITextBlockState> {
  blockRef = createRef<HTMLDivElement>();
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

  canMoveToNeighborhoodBlock(mode: 'prev' | 'next') {
    const contentState = this.state.editorState.getCurrentContent();
    const blocks = contentState.getBlocksAsArray();
    const selectionState = this.state.editorState.getSelection();
    if (!selectionState.isCollapsed()) return false;
    if (mode === 'prev' && blocks[0].getKey() === selectionState.getAnchorKey()) return true;
    return mode === 'next' && blocks[blocks.length - 1].getKey() === selectionState.getAnchorKey();
  }

  content() {
    const { editorState } = this.state;

    return (
      <div ref={this.blockRef} className={css.textBlock}>
        <Editor editorState={editorState} onChange={this.onChange} ref={this.editorRef} />
      </div>
    );
  }
}

export { TextBlock };
