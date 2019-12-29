import React, { Component } from 'react';
import { render } from 'react-dom';

import css from './style.scss';

class Studio extends Component {
  render() {
    return <div className={css.root}>studio</div>;
  }
}

render(<Studio />, document.getElementById('app-root'));
