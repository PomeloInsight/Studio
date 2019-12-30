import React, { Component } from 'react';
import { render } from 'react-dom';

import { initialFabricIcons } from 'src/global/ts/fabric-icons';
import { EditorCore } from 'src/components/editorCore';

import css from 'src/pages/editor/style.scss';

initialFabricIcons();

class Studio extends Component {
  render() {
    return (
      <div className={css.editor}>
        <EditorCore />
      </div>
    );
  }
}

render(<Studio />, document.getElementById('app-root'));
