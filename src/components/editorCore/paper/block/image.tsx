import React from 'react';

import { Base } from 'src/components/editorCore/paper/block/base';

import css from 'src/components/editorCore/paper/block/block.scss';

interface IImageBlockProps {
  block: IImageBlock;
}

class Image extends Base<IImageBlockProps, any> {
  paint = () => (
    <div className={css.imageBlock}>
      <img src={this.props.block.src} alt={this.props.block.caption} />
    </div>
  );
}

export { Image, IImageBlockProps };
