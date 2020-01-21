import { BaseBlock } from 'src/components/editorCore/paper/blocks/baseBlock';
import { Map } from 'immutable';

class RefManagement {
  private refs = Map<string, BaseBlock<{}, {}>>();

  // ref 生命周期管理，该函数放在组件的 ref 回调中使用
  // 当组件挂载时，ref的参数为组件实例，此时将该实例组册进this.refs中
  // 当组件销毁时，ref的参数变为null，此时根据id将this.refs中的ref移除
  handleRefLifeCircle(id: string, ref: BaseBlock<{}, {}> | null) {
    if (ref) {
      this.refs = this.refs.set(id, ref);
    } else {
      this.refs = this.refs.remove(id);
    }
  }

  get(id: string) {
    return this.refs.get(id);
  }

  // 寻找相邻的block
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
