import uuid from 'uuid/v1';
import { EditorState } from 'draft-js';
import { List } from 'immutable';

function createBlock(
  id = uuid(),
  type: IEditorCoreBlockType = 'text',
  initialEditorState = EditorState.createEmpty(),
): IEditorCoreBlock {
  return {
    id,
    type,
    initialEditorState,
  };
}

function createInitialBlocks(): List<IEditorCoreBlock> {
  return List([createBlock(), createBlock(), createBlock(), createBlock(), createBlock(), createBlock()]);
}

export { createInitialBlocks };
