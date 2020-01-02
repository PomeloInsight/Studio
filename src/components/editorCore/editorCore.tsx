import React, { Component } from 'react';

import { NavBar } from 'src/components/editorCore/navBar/navBar';
import { CommandsBar } from 'src/components/editorCore/commandsBar/commandsBar';
import { Paper } from 'src/components/editorCore/paper/paper';

import css from 'src/components/editorCore/editorCore.scss';

class EditorCore extends Component {
  render() {
    return (
      <div className={css.editorCore}>
        <NavBar />
        <CommandsBar />
        <Paper />
      </div>
    );
  }
}

export { EditorCore };
