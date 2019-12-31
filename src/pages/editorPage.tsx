import React, { Component } from 'react';
import { render } from 'react-dom';

import { initialFabricFonts, initialFabricIcons } from 'src/global/ts/fabric-fonts';
import { EditorCore } from 'src/components/editorCore/editorCore';

import css from 'src/pages/editorPage.scss';

initialFabricIcons();
initialFabricFonts();

class EditorPage extends Component {
  render() {
    return (
      <div className={css.editor}>
        <EditorCore />
      </div>
    );
  }
}

render(<EditorPage />, document.getElementById('app-root'));
