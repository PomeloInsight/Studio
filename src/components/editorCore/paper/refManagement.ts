import { Map } from 'immutable';
import { AllBlocks } from 'src/components/editorCore/paper/block';

class RefManagement {
  private refs = Map<string, AllBlocks>();

  /**
   * ref 生命周期管理，该函数放在组件的 ref 回调中使用
   * 当组件挂载时，ref的参数为组件实例，此时将该实例组册进this.refs中
   * 当组件销毁时，ref的参数变为null，此时根据id将this.refs中的ref移除
   * @param id
   * @param ref
   */
  handleRefLifeCircle(id: string, ref: AllBlocks | null) {
    if (ref) {
      this.refs = this.refs.set(id, ref);
    } else {
      this.refs = this.refs.remove(id);
    }
  }

  get(id: string) {
    return this.refs.get(id);
  }

  /**
   * 寻找上一个/下一个block
   * @param id
   * @param direction
   */
  getNear(id: string, direction: 'prev' | 'next') {
    const ele = document.querySelector(`[data-block-id='${id}']`);
    const prevEle = direction === 'prev' ? ele?.previousElementSibling : ele?.nextElementSibling;
    const prevId = prevEle?.getAttribute('data-block-id');
    if (prevId) return this.get(prevId);
    return null;
  }
}

export { RefManagement };
