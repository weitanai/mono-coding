import React, { CSSProperties, ReactNode } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface IDragableWrapperProps {
    id: number;
    children: ReactNode;
}
export function DragableWrapper(props: IDragableWrapperProps) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: props.id });

    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? 100 : 'auto',
        opacity: isDragging ? 0.3 : 1,
        cursor: isDragging ? 'grabbing' : 'grab',
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {props.children}
        </div>
    );
}
