import React, { Component } from 'react';

import { RefManagement } from 'src/components/editorCore/paper/blocks/refManagement';

import css from 'src/components/editorCore/paper/blocks/block.scss';

interface IBaseBlockProps {
  id: string;
  refManagement: RefManagement;
}

class BaseBlock<P, S> extends Component<P & IBaseBlockProps, S> {
  componentDidMount() {
    this.props.refManagement.register(this);
  }

  componentWillUnmount() {
    this.props.refManagement.dispose(this);
  }

  needFocus() {}

  private _onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    this.onBlockClick(event);
  };

  onBlockClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};

  private _onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp' && this.canMoveToNeighborhoodBlock('prev')) {
      console.log('prev');
      return;
    }

    if (event.key === 'ArrowDown' && this.canMoveToNeighborhoodBlock('next')) {
      console.log('next');
      return;
    }
  };

  canMoveToNeighborhoodBlock(mode: 'prev' | 'next') {
    return true;
  }

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
        {this.content()}
      </div>
    );
  }
}

export { BaseBlock };
