import React from 'react';

import { RefManagement } from 'src/components/editorCore/paper/blocks/refManagement';

import { TextBlock } from 'src/components/editorCore/paper/blocks/textBlock';
import { ImageBlock } from 'src/components/editorCore/paper/blocks/imageBlock';

const MapBlock = (block: IEditorCoreBaseBlock, refManagement: RefManagement) => {
  switch (block.type) {
    case 'image':
      return (
        <ImageBlock block={block as IEditorCoreImageBlock} key={block.id} id={block.id} refManagement={refManagement} />
      );
    case 'text':
      return (
        <TextBlock block={block as IEditorCoreTextBlock} key={block.id} id={block.id} refManagement={refManagement} />
      );
    default:
      return null;
  }
};

export { MapBlock };
