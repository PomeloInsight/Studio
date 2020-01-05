import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';
import { Map } from 'immutable';

class RefManagement {
  private refs = Map<string, BaseBlock<{}, {}>>();

  // ref 生命周期管理，
  handleRefLifeCircle(id: string, ref?: BaseBlock<{}, {}>) {
    if (ref) {
      this.refs = this.refs.set(id, ref);
    } else {
      this.refs = this.refs.remove(id);
    }
  }

  get(id: string) {
    return this.refs.get(id);
  }

  private getNeighborhood(id: string, direction: 'up' | 'down') {
    const ele = document.querySelector(`[data-block-id='${id}']`);
    const prevEle = direction === 'up' ? ele?.previousElementSibling : ele?.nextElementSibling;
    const prevId = prevEle?.getAttribute('data-block-id');
    if (prevId) return this.get(prevId);
    return null;
  }

  getPrev(id: string) {
    return this.getNeighborhood(id, 'up');
  }

  getNext(id: string) {
    return this.getNeighborhood(id, 'down');
  }
}

export { RefManagement };
