import uuid from 'uuid/v1';
import { EditorState } from 'draft-js';
import { List } from 'immutable';

function createTextBlockData(id = uuid(), editorState = EditorState.createEmpty()): IEditorCoreTextBlock {
  return {
    id,
    type: 'text',
    editorState,
  };
}

function createInitialBlocks(): List<IEditorCoreBaseBlock> {
  return List([createTextBlockData(), createTextBlockData(), createTextBlockData()]);
}

export { createInitialBlocks };
