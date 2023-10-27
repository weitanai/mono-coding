import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props: any) {
  const {id} = props;
  const {isOver, setNodeRef} = useDroppable({
    id: `droppable-${id}`,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}