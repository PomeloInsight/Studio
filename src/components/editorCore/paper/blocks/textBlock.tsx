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
    const selection = window.getSelection();
    if (!selection) return false;
    if (selection.rangeCount === 0) return false;

    const range = selection.getRangeAt(0);
    const rangeStart =
      range.startContainer.nodeType === Node.TEXT_NODE
        ? range.startContainer.parentElement!
        : (range.startContainer as HTMLElement);

    const { offsetTop } = this.blockRef.current!;
    const rangeTop = rangeStart.offsetTop - offsetTop;

    console.log(rangeStart.offsetTop, offsetTop);

    return false;
  }

  content() {
    const { editorState } = this.state;

    return (
      <div ref={this.blockRef}>
        <Editor editorState={editorState} onChange={this.onChange} ref={this.editorRef} />
      </div>
    );
  }
}

export { TextBlock };
