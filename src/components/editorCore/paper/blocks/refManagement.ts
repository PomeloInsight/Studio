import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';

class RefManagement {
  private _store = new Map<string, BaseBlock<{}, {}>>();

  indexStore: string[] = [];

  appendId(id: string) {
    this.indexStore.push(id);
  }

  register(ref: BaseBlock<{}, {}>) {
    this._store.set(ref.props.id, ref);
  }

  dispose(ref: BaseBlock<{}, {}>) {
    this._store.delete(ref.props.id);
    const index = this.indexStore.findIndex(id => id === ref.props.id);
    if (index !== -1) {
      this.indexStore.splice(index, 1);
    }
  }

  get(id: string) {
    return this._store.get(id);
  }
}

export { RefManagement };
