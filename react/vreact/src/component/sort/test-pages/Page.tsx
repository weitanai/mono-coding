import React, { forwardRef, HTMLAttributes } from 'react';
import type { UniqueIdentifier } from '@dnd-kit/core';

import './Page.css';

export enum Position {
  Before = -1,
  After = 1,
}

export enum Layout {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Grid = 'grid',
}

export interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'id'> {
  active?: boolean;
  clone?: boolean;
  insertPosition?: Position;
  id: UniqueIdentifier;
  index?: number;
  layout: Layout;
}

export const Page = forwardRef<HTMLLIElement, Props>(function Page(
  { id, index, active, clone, insertPosition, layout, style, ...props },
  ref
) {
  return (
    <li
      className={`
      monocoondg-wrapper ${active ? 'active' : ''}${clone ? 'clone' : ''} ${insertPosition === Position.Before ? 'insert-before' : ''} ${insertPosition === Position.After ? 'insert-after' : ''}
      `}
      style={style}
      ref={ref}
    >
      <button className='mono-page' data-id={id.toString()} {...props} >{id}</button>
      {index != null ? (
        <span className='page-number'>{index}</span>
      ) : null}
    </li>
  );
});
