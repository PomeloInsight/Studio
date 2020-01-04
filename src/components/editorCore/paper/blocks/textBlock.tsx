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
    return true;
  }

  canMoveToNeighborhoodBlock(mode: 'prev' | 'next') {
    const selection = window.getSelection();
    if (!selection) return false;
    if (selection.rangeCount === 0) return false;

    const range = selection.getRangeAt(0);
    const rangeStart =
      range.startContainer.nodeType === Node.TEXT_NODE
        ? range.startContainer.parentElement!
        : (range.startContainer as HTMLElement);

    const { offsetTop, offsetHeight } = this.blockRef.current!;
    const rangeTop = rangeStart.offsetTop - offsetTop;

    if (mode === 'prev') return rangeTop === 0;
    if (mode === 'next') return rangeTop + rangeStart.offsetHeight === offsetHeight;
    return false;
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
