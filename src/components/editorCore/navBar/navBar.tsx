import React, { Component } from 'react';
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react';

import { navBarI18n } from 'src/i18n/components/editorCore/navBar';
import css from 'src/components/editorCore/navBar/navBar.scss';

const items: IBreadcrumbItem[] = [
  { text: 'Leet Code', key: 'Files' },
  { text: 'Array', key: 'f1' },
  { text: '905. Sort Array By Parity', key: 'f5', isCurrentItem: true },
];

class NavBar extends Component {
  render() {
    return (
      <div className={css.navBar}>
        <Breadcrumb
          className={css.breadcrumb}
          items={items}
          maxDisplayedItems={2}
          overflowIndex={1}
          ariaLabel={navBarI18n.aria.breadcrumb}
          overflowAriaLabel={navBarI18n.aria.moreLinks}
        />
      </div>
    );
  }
}

export { NavBar };
