import React from 'react';

import { RefManagement } from 'src/components/editorCore/paper/refManagement';
import { switchBlock } from 'src/components/editorCore/paper/blockDataUtils';
import { Paragraph } from 'src/components/editorCore/paper/block/paragraph';
import { Image } from 'src/components/editorCore/paper/block/image';

/**
 * block选择器，根据block.type返回对应的block实例，同时创建ref生命周期管理
 * @param block
 * @param refManagement
 */
const blockMap = (block: NonNullable<ReturnType<typeof switchBlock>>, refManagement: RefManagement) => {
  const commonProps = {
    id: block.id,
    key: block.id,
    refManagement,
  };

  if ((block as IParagraphBlock).type === 'paragraph') {
    return (
      <Paragraph
        {...commonProps}
        block={block as IParagraphBlock}
        ref={(component: Paragraph | null) => refManagement.handleRefLifeCircle(block.id, component)}
      />
    );
  }

  if ((block as IImageBlock).type === 'image') {
    return (
      <Image
        {...commonProps}
        block={block as IImageBlock}
        ref={(component: Image | null) => refManagement.handleRefLifeCircle(block.id, component)}
      />
    );
  }

  return null;
};

export { blockMap };
