import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';

class RefManagement {
  private _store = new Map<string, BaseBlock<{}, {}>>();

  register(ref: BaseBlock<{}, {}>) {
    this._store.set(ref.props.id, ref);
  }

  dispose(ref: BaseBlock<{}, {}>) {
    this._store.delete(ref.props.id);
  }

  get(id: string) {
    return this._store.get(id);
  }
}

export { RefManagement };
