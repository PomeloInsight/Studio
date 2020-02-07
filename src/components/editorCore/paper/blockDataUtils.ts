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
  src: 'https://s2.ax1x.com/2020/02/07/1cvaLQ.jpg',
  caption: 'John.Wick',
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
