import React, { Component, createRef } from 'react';

import { createInitialBlocks } from 'src/components/editorCore/paper/blocks/creator';
import { MapBlock } from 'src/components/editorCore/paper/blocks';
import { RefManagement } from 'src/components/editorCore/paper/blocks/refManagement';

import blockCss from 'src/components/editorCore/paper/blocks/block.scss';
import css from 'src/components/editorCore/paper/paper.scss';

class Paper extends Component {
  contentRef = createRef<HTMLDivElement>();

  refManagement = new RefManagement();

  state = {
    blocks: createInitialBlocks(),
  };

  onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // find nearest block and focus it
    const { refManagement } = this;
    const { offsetX, offsetY } = e.nativeEvent;
    const allBlocks = document.querySelectorAll<HTMLDivElement>(`.${blockCss.baseBlock}`);
    const { offsetTop, offsetLeft } = this.contentRef.current!;

    let lastDistance = Number.MAX_SAFE_INTEGER;
    let targetRef: ReturnType<typeof refManagement.getRef>;

    for (let i = 0; i < allBlocks.length; i++) {
      const blockEle = allBlocks[i];
      const blockId = blockEle.getAttribute('data-block-id');
      const blockRef = this.refManagement.getRef(blockId!);
      if (!blockRef) continue;

      const childLeft = blockEle.offsetLeft - offsetLeft;
      const childTop = blockEle.offsetTop - offsetTop;

      const centerX = childLeft + blockEle.offsetWidth / 2;
      const centerY = childTop + blockEle.offsetHeight / 2;
      const distance = Math.sqrt(Math.pow(centerX - offsetX, 2) + Math.pow(centerY - offsetY, 2));

      if (distance < lastDistance) {
        targetRef = blockRef;
        lastDistance = distance;
      } else {
        break;
      }
    }

    targetRef?.needFocus();
  };

  render() {
    console.log('render');
    return (
      <div className={css.paper}>
        <div className={css.content} onClick={this.onClick} role='document' ref={this.contentRef}>
          {this.state.blocks.map(block => MapBlock(block!, this.refManagement))}
        </div>
      </div>
    );
  }
}

export { Paper };
