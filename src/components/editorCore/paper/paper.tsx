import React, { Component, createRef } from 'react';

import { createInitialBlocks } from 'src/components/editorCore/paper/blockDataUtils';
import { RefManagement } from 'src/components/editorCore/paper/refManagement';
import { blockMap } from 'src/components/editorCore/paper/blockMap';

import blockCss from 'src/components/editorCore/paper/block/block.scss';
import css from 'src/components/editorCore/paper/paper.scss';

class Paper extends Component {
  contentRef = createRef<HTMLDivElement>();

  refManagement = new RefManagement();

  state = {
    blocks: createInitialBlocks(),
  };

  // 找到最近的block并focus它
  onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { refManagement } = this;
    const { offsetX, offsetY } = e.nativeEvent;
    const allBlocks = document.querySelectorAll<HTMLDivElement>(`.${blockCss.block}`);
    const { offsetTop, offsetLeft } = this.contentRef.current!;

    let lastDistance = Number.MAX_SAFE_INTEGER;
    let targetRef: ReturnType<typeof refManagement.get> | null = null;

    for (let i = 0; i < allBlocks.length; i++) {
      const blockEle = allBlocks[i];
      const blockId = blockEle.getAttribute('data-block-id');
      const blockRef = this.refManagement.get(blockId!);
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

    targetRef?.focus();
  };

  render() {
    console.log('render paper');
    return (
      <div className={css.paper}>
        <div className={css.content} onClick={this.onClick} role='document' ref={this.contentRef}>
          {this.state.blocks.map(block => blockMap(block!, this.refManagement))}
        </div>
      </div>
    );
  }
}

export { Paper };
