import React, { Component } from 'react';
import { Icon } from 'office-ui-fabric-react';

import { paperI18n } from 'src/i18n/components/editorCore/paper';
import { RefManagement } from 'src/components/editorCore/paper/refManagement';

import css from 'src/components/editorCore/paper/blocks/block.scss';

interface IBaseBlockProps {
  id: string;
  refManagement: RefManagement;
}

class BaseBlock<P, S> extends Component<P & IBaseBlockProps, S> {
  // 当组件需要focus时被调用，每个block实例都有不同的focus行为，实例需要继承该方法
  needFocus() {}

  // block被点击时，其click事件不应该被上层组件捕获，冒泡行为应该在该层停止
  // 如果block实例需要对其click事件做处理，需要继承onBlockClick方法
  private _onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    this.onBlockClick(event);
  };

  onBlockClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};

  // 组件内的键盘事件负责当↑↓键按下时，focus上一个/下一个block
  private _onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp' && this.canMoveToNeighborhoodBlock('prev')) {
      const targetRef = this.props.refManagement.getPrev(this.props.id);
      targetRef?.needFocus();
      return;
    }

    if (event.key === 'ArrowDown' && this.canMoveToNeighborhoodBlock('next')) {
      const targetRef = this.props.refManagement.getNext(this.props.id);
      targetRef?.needFocus();
      return;
    }
  };

  // 判断能不能focus上一个/下一个block，block实例需要继承该方法用来详细判断
  canMoveToNeighborhoodBlock(mode: 'prev' | 'next') {
    return true;
  }

  // block真实内容
  content(): JSX.Element | null | undefined {
    return null;
  }

  render() {
    const { id } = this.props;
    return (
      <div
        className={css.baseBlock}
        onClick={this._onClick}
        role='document'
        data-block-id={id}
        onKeyDown={this._onKeyDown}
      >
        <div className={css.blockAction}>
          <Icon iconName='Waffle' ariaLabel={paperI18n.aria.moreBlockActions} className={css.moreAction} />
        </div>
        <div className={css.blockContent}>{this.content()}</div>
      </div>
    );
  }
}

export { BaseBlock };
