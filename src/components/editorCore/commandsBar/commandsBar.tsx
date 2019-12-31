import React, { Component } from 'react';
import { CommandBar } from 'office-ui-fabric-react';

import { left, right } from 'src/components/editorCore/commandsBar/createCommands';

import css from 'src/components/editorCore/commandsBar/commandsBar.scss';

class CommandsBar extends Component {
  render() {
    return (
      <div className={css.commandBar}>
        <CommandBar items={left()} farItems={right()} />
      </div>
    );
  }
}

export { CommandsBar };
