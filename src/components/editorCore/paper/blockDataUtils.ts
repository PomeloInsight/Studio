import uuid from 'uuid/v1';
import { EditorState } from 'draft-js';
import { List } from 'immutable';

const createParagraphBlockData = (id = uuid(), editorState = EditorState.createEmpty()): IParagraphBlock => ({
  id,
  type: 'paragraph',
  editorState,
});

const createImageBlockData = (id = uuid()): IImageBlock => ({
  id,
  type: 'image',
  src: 'https://i2.hdslb.com/bfs/archive/5282323ba2831611b57154c9310ea9034adf7884.jpg@412w_232h_1c_100q.webp',
});

const switchBlock = (type: string) => {
  if (type === 'paragraph') return createParagraphBlockData();
  if (type === 'image') return createImageBlockData();
};

function createInitialBlocks() {
  return List([
    switchBlock('paragraph'),
    switchBlock('paragraph'),
    switchBlock('paragraph'),
    switchBlock('paragraph'),
    switchBlock('image'),
  ]);
}

export { switchBlock, createInitialBlocks };
