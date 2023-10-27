import React, { forwardRef } from 'react';

interface ItemProps {
  id: string;
}

const Item = forwardRef<HTMLDivElement, ItemProps>(({ id, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>{id}</div>
  )
});
export default Item;