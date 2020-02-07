import React, { FunctionComponent, useState } from 'react';

import { AllBlocks, BlockType } from 'src/components/editorCore/sketch/blocks/definition';
import { Image, Paragraph } from 'src/components/editorCore/sketch/blocks';

import css from 'src/components/editorCore/sketch/sketch.scss';


function switchBlock(block: AllBlocks) {
  if (block.type === BlockType.image) return <Image data={ block } key={ block.id }/>;
  if (block.type === BlockType.paragraph) return <Paragraph data={ block } key={ block.id }/>;
}


type SketchProps = {
  blocks: AllBlocks[];
}


const Sketch: FunctionComponent<SketchProps> = ({ blocks }) => {
  const [bs, _] = useState(blocks);

  return (
    <div className={ css.sketch }>
      <div className={ css.sketchContent }>
        { bs.map(b => switchBlock(b)) }
      </div>
    </div>
  );
};


export { Sketch };
