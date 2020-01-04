import React, { Component } from 'react';

import css from 'src/components/editorCore/paper/blocks/block.scss';

class BaseBlock<P, S> extends Component<P, S> {
  private _onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    this.onBlockClick(event);
  };

  onBlockClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};

  content(): JSX.Element | null | undefined {
    return null;
  }

  render() {
    return (
      <div className={css.block} onClick={this._onClick} role='document'>
        {this.content()}
      </div>
    );
  }
}

export { BaseBlock };
