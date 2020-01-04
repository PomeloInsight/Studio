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

  private _onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    this.onBlockClick(event);
  };

  onBlockClick = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};

  content(): JSX.Element | null | undefined {
    return null;
  }

  needFocus() {}

  render() {
    const { id } = this.props;
    return (
      <div className={css.baseBlock} onClick={this._onClick} role='document' data-block-id={id}>
        {this.content()}
      </div>
    );
  }
}

export { BaseBlock };
