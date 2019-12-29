import React, { Component } from 'react';
import { CommandBar } from 'office-ui-fabric-react';

import { left, right } from 'src/components/editorCore/commandsBar/createCommands';

class CommandsBar extends Component {
  render() {
    return (
      <div>
        <CommandBar items={left()} farItems={right()} />
      </div>
    );
  }
}

export { CommandsBar };
