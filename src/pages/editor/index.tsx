import React, { Component } from 'react';
import { render } from 'react-dom';

import EditorCore from '../../components/editorCore';

import css from './style.scss';

class Studio extends Component {
  render() {
    return (
      <div className={css.root}>
        <EditorCore />
      </div>
    );
  }
}

render(<Studio />, document.getElementById('app-root'));
