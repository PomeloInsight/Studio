import React from 'react';
import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';

const MapBlock = (block: IEditorCoreBlock) => {
  switch (block.type) {
    case 'image':
      return <BaseBlock block={block} key={block.id} />;
    case 'text':
      return <BaseBlock block={block} key={block.id} />;
    default:
      return undefined;
  }
};

export { MapBlock };
