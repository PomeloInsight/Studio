import React, { Component } from 'react';

import { createInitialBlocks } from 'src/components/editorCore/paper/blocks/management';
import { MapBlock } from 'src/components/editorCore/paper/blocks';

import css from 'src/components/editorCore/paper/paper.scss';

class Paper extends Component {
  state = {
    blocks: createInitialBlocks(),
  };

  render() {
    console.log('render');
    return (
      <div className={css.paper}>
        <div className={css.content}>{this.state.blocks.map(block => MapBlock(block!))}</div>
      </div>
    );
  }
}

export { Paper };
