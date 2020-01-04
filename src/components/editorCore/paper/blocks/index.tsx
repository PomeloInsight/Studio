import React from 'react';

import { TextBlock } from 'src/components/editorCore/paper/blocks/textBlock';
import { ImageBlock } from 'src/components/editorCore/paper/blocks/imageBlock';

const MapBlock = (block: IEditorCoreBaseBlock) => {
  switch (block.type) {
    case 'image':
      return <ImageBlock block={block as IEditorCoreImageBlock} key={block.id} />;
    case 'text':
      return <TextBlock block={block as IEditorCoreTextBlock} key={block.id} />;
    default:
      return null;
  }
};

export { MapBlock };
