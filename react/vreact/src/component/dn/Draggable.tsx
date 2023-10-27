import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function Draggable(props) {
  const id = props.id;
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <button {...listeners} {...attributes}>Drag handle 1</button>
      <button {...listeners} {...attributes}>Drag handle 2</button>
    </button>
  );
}