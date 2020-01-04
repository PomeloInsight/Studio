import React from 'react';
import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';

interface IImageBlockProps {
  block: IEditorCoreImageBlock;
}

class ImageBlock extends BaseBlock<IImageBlockProps, any> {
  content() {
    return <div>ImageBlock</div>;
  }
}

export { ImageBlock };
