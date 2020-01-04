declare type IEditorCoreBlockType = 'text' | 'image';

interface IEditorCoreBlock {
  id: string;
  type: IEditorCoreBlockType;
  initialEditorState: EditorState;
}

interface IEditorCoreBaseBlockProps {
  block: IEditorCoreBlock;
}

interface IEditorCoreBaseBlockState {
  editorState: EditorState;
}
