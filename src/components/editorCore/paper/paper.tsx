import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

import { applyChange, createDefaultBlocks } from 'src/components/editorCore/paper/blocks';

import css from 'src/components/editorCore/paper/paper.scss';

class Paper extends Component {
  state = {
    blocks: createDefaultBlocks(),
  };

  onChange(id: string, newEditorState: EditorState) {
    this.setState({
      blocks: applyChange(this.state.blocks, id, newEditorState),
    });
  }

  componentDidMount(): void {
    console.log(this.state);
  }

  render() {
    return (
      <div className={css.paper}>
        <div className={css.content}>
          {this.state.blocks.map(block => (
            <div className={css.block} key={block?.id}>
              <Editor editorState={block?.editorState} onChange={newState => this.onChange(block?.id!, newState)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { Paper };
