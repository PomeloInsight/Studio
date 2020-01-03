import React, { Component } from 'react';
import { Breadcrumb, IBreadcrumbItem, IRenderFunction, TextField } from 'office-ui-fabric-react';

import { navBarI18n } from 'src/i18n/components/editorCore/navBar';

import css from 'src/components/editorCore/navBar/navBar.scss';

const items: IBreadcrumbItem[] = [
  { text: 'Leet Code', key: 'Files' },
  { text: 'Hard', key: 'f0' },
  { text: 'Array', key: 'f1' },
  { text: '905.Sort Array By Parity', key: 'f5', isCurrentItem: true },
];

const renderBreadcrumbItem: IRenderFunction<IBreadcrumbItem> = props => {
  if (props?.key === items[items.length - 1].key) {
    return (
      <TextField
        ariaLabel={navBarI18n.aria.pageName.replace('{pageName}', props?.text)}
        autoComplete='off'
        borderless={true}
        defaultValue={props?.text}
        className={css.pageName}
        inputClassName={css.pageNameInput}
        title={navBarI18n.label.pageName}
      />
    );
  }
  return <span className={css.breadcrumbItem}>{props?.text}</span>;
};

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
          onRenderItem={renderBreadcrumbItem}
        />
      </div>
    );
  }
}

export { NavBar };
