import React, { Component } from 'react';

import css from 'src/components/editorCore/paper/paper.scss';

class Paper extends Component {
  render() {
    return (
      <div className={css.paper}>
        <div className={css.content}>AA</div>
      </div>
    );
  }
}

export { Paper };
