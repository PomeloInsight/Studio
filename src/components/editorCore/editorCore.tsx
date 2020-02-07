import React, { Component } from 'react';

import { NavBar } from 'src/components/editorCore/navBar/navBar';
import { CommandsBar } from 'src/components/editorCore/commandsBar/commandsBar';
import { Sketch } from 'src/components/editorCore/sketch/sketch';

import { createTestData } from 'src/components/editorCore/sketch/blocks/utils';

import css from 'src/components/editorCore/editorCore.scss';


class EditorCore extends Component {
  render() {
    return (
      <div className={ css.editorCore }>
        <NavBar/>
        <CommandsBar/>
        <Sketch blocks={ createTestData() }/>
      </div>
    );
  }
}


export { EditorCore };
