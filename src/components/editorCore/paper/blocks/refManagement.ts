import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';

class RefManagement {
  private _store = new Map<string, BaseBlock<{}, {}>>();
  private _indexStore: string[] = [];

  appendId(id: string) {
    this._indexStore.push(id);
  }

  findNextId(id: string) {
    const index = this._indexStore.indexOf(id);
    if (index !== -1) {
      return this._indexStore[Math.min(index + 1, this._indexStore.length - 1)];
    }
    return null;
  }

  findPrevId(id: string) {
    const index = this._indexStore.indexOf(id);
    if (index !== -1) {
      return this._indexStore[Math.max(index - 1, 0)];
    }
    return null;
  }

  register(ref: BaseBlock<{}, {}>) {
    this._store.set(ref.props.id, ref);
  }

  dispose(ref: BaseBlock<{}, {}>) {
    this._store.delete(ref.props.id);
    const index = this._indexStore.findIndex(id => id === ref.props.id);
    if (index !== -1) {
      this._indexStore.splice(index, 1);
    }
  }

  getRef(id: string) {
    return this._store.get(id);
  }
}

export { RefManagement };
