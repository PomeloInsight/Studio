import uuid from 'uuid/v1';
import { EditorState } from 'draft-js';
import { List } from 'immutable';

function createTextBlock(id = uuid(), editorState = EditorState.createEmpty()): IEditorCoreTextBlock {
  return {
    id,
    type: 'text',
    editorState,
  };
}

function createInitialBlocks(): List<IEditorCoreBaseBlock> {
  return List([createTextBlock(), createTextBlock(), createTextBlock(), createTextBlock(), createTextBlock()]);
}

export { createInitialBlocks };
