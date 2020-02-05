// block类型
declare const IBlockType = 'paragraph' | 'image';

// base block 数据
abstract interface IBaseBlock {
  id: string;
  type: IBlockType;
}

// paragraph block 数据
interface IParagraphBlock extends IBaseBlock {
  type: 'paragraph';
  editorState: import('draft-js').EditorState;
}

// image block 数据
interface IImageBlock extends IBaseBlock {
  type: 'image';
  src: string;
  caption?: string;
  link?: string;
  target?: '_blank' | '_self';
}
