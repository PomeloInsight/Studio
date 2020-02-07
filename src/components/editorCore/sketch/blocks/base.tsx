import React, { FunctionComponent } from 'react';
import { Icon } from 'office-ui-fabric-react';

import css from 'src/components/editorCore/sketch/blocks/block.scss';


function base<T>(ChildBlock: FunctionComponent<T>): FunctionComponent<T> {
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowUp', 'ArrowDown'].includes(event.key)) return;
    const direction = event.key === 'ArrowUp' ? 'prev' : 'next';
    console.log(direction);
  };

  return (props) => (
    <div className={ css.base } onKeyDown={ onKeyDown } role='document'>
      <div className={ css.dragHandle }>
        <Icon iconName='GlobalNavButton'/>
      </div>
      <div className={ css.blockContent }>
        <ChildBlock { ...props }/>
      </div>
    </div>
  );
}

export { base };
