import React, { FunctionComponent } from 'react';

import { ImageBlockData } from 'src/components/editorCore/sketch/blocks/definition';
import { base } from 'src/components/editorCore/sketch/blocks/base';

import css from 'src/components/editorCore/sketch/blocks/block.scss';


type ImageBlockProps = {
  data: ImageBlockData;
}

const Image: FunctionComponent<ImageBlockProps> = base(({ data }) => {
  return (
    <div className={ css.imageBlock }>
      <img src={ data.src } alt={ data.caption }/>
      <span>{ data.caption }</span>
    </div>
  );
});


export { Image };
