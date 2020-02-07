import React, { Component } from 'react';
import { Icon } from 'office-ui-fabric-react';

import { RefManagement } from 'src/components/editorCore/paper/refManagement';

import css from 'src/components/editorCore/paper/block/block.scss';


interface IBaseBlockProps {
  id: string;

  refManagement: RefManagement;
}


class Base<P, S> extends Component<P & IBaseBlockProps, S> {
  /**
   * block的focus逻辑
   * 当block需要focus时，可能会有不同的focus行为，需要block子类自行实现
   */
  focus = () => {};


  /**
   * block点击事件
   * @param _
   */
  onClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};


  /**
   * block的内容
   */
  paint = (): JSX.Element | null | undefined => null;


  /**
   * 判断当前光标位置在block内能不能focus上一个/下一个block
   * block实例需要继承该方法用来详细判断
   * @param _
   */
  canFocusNear = (_: 'prev' | 'next') => true;


  /**
   * block被点击时，其click事件不应该被上层组件捕获，冒泡行为应该在该层停止
   * 如果block实例需要对其click事件做处理，需要继承onClick方法
   * @param event
   */
  private onBlockClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    this.onClick(event);
  };


  /**
   * 处理block内↑↓键按下时相邻block是否focus的逻辑
   * @param event
   */
  private onBlockKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key)) return;
    const direction = event.key === 'ArrowUp' ? 'prev' : 'next';
    const ref = this.props.refManagement.getNear(this.props.id, direction);
    this.canFocusNear(direction) && ref?.focus();
  };


  render() {
    const { id } = this.props;

    return (
      <div
        className={ css.block }
        role='document'
        data-block-id={ id }
        onClick={ this.onBlockClick }
        onKeyDown={ this.onBlockKeyDown }
      >
        <div className={ css.dragHandle }>
          <Icon iconName='GlobalNavButton'/>
        </div>
        <div className={ css.blockContent }>{ this.paint() }</div>
      </div>
    );
  }
}


export { Base };
