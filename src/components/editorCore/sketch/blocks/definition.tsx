import uuid from 'uuid/v1';

import { EditorState } from 'draft-js';


enum BlockType {
  image,
  paragraph
}


interface IBaseBlockData {
  id: string;

  type: BlockType;
}


class ImageBlockData implements IBaseBlockData {
  readonly type = BlockType.image;


  constructor(
    public src: string,
    public id = uuid(),
    public caption = '',
    public link = '',
    public target: '_blank' | '_self' = '_blank',
  ) {}
}


class ParagraphBlockData implements IBaseBlockData {
  readonly type = BlockType.paragraph;


  constructor(
    public id = uuid(),
    public editorState = EditorState.createEmpty(),
  ) {}
}


type AllBlocks = ImageBlockData | ParagraphBlockData;


export { BlockType, ImageBlockData, ParagraphBlockData, AllBlocks };
