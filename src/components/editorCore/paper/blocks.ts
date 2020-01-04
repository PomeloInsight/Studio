import uuid from 'uuid/v1';
import { List } from 'immutable';
import { EditorState } from 'draft-js';

function createBlock(id = uuid(), editorState = EditorState.createEmpty()): IEditorBlock {
  return {
    id,
    editorState,
  };
}

function createDefaultBlocks(): List<ReturnType<typeof createBlock>> {
  return List([createBlock(), createBlock(), createBlock(), createBlock(), createBlock(), createBlock()]);
}

function applyChange(blocks: ReturnType<typeof createDefaultBlocks>, id: string, newState: EditorState) {
  const index = blocks.findIndex(b => b?.id === id);

  if (index === -1) throw new Error(`block ${id} is not found`);

  const newBlock = createBlock(id, newState);

  return blocks.set(index, newBlock);
}

export { createDefaultBlocks, applyChange };
