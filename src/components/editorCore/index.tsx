import React, { Component } from 'react';

import { CommandsBar } from 'src/components/editorCore/commandsBar';

import 'src/global/style/reset.scss';

import css from 'src/components/editorCore/style.scss';

class EditorCore extends Component {
  render() {
    return (
      <div className={css.editorCore}>
        <CommandsBar />
      </div>
    );
  }
}

export { EditorCore };
