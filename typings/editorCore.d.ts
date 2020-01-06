// block type
declare type IEditorCoreBlockType = 'text' | 'image';

// base block, all blocks will extends this
interface IEditorCoreBaseBlock {
  id: string;
  type: IEditorCoreBlockType;
}

// text block
interface IEditorCoreTextBlock extends IEditorCoreBaseBlock {
  type: 'text';
  editorState: import('draft-js').EditorState;
}

// image block
interface IEditorCoreImageBlock extends IEditorCoreBaseBlock {
  type: 'image';
  src: string;
  caption?: string;
  link?: string;
  target?: '_blank' | '_self';
}
