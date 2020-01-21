import React from 'react';

import { RefManagement } from 'src/components/editorCore/paper/refManagement';
import { TextBlock } from 'src/components/editorCore/paper/blocks/textBlock';
import { ImageBlock } from 'src/components/editorCore/paper/blocks/imageBlock';

// block选择器，根据block.type返回对应的block实例，并添加ref注册机制
function blockChoicer(block: IEditorCoreBaseBlock, refManagement: RefManagement) {
  function createProps() {
    return {
      id: block.id,
      key: block.id,
      block: block as any,
      refManagement,
      ref: (component: any | null) => {
        refManagement.handleRefLifeCircle(block.id, component);
      },
    };
  }

  if (block.type === 'text') return <TextBlock {...createProps()} />;
  if (block.type === 'image') return <ImageBlock {...createProps()} />;
}

export { blockChoicer };
