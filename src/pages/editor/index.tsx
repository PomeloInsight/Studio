import React, { Component } from 'react';
import { render } from 'react-dom';

import { initialFabricFonts, initialFabricIcons } from 'src/global/ts/fabric-fonts';
import { EditorCore } from 'src/components/editorCore';

import css from 'src/pages/editor/style.scss';

initialFabricIcons();
initialFabricFonts();

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
