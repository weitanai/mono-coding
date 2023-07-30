import { PDFEditor } from '@/editor/pdf-editor/pdf-editor';
import { closestCenter, DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { POSITIONS } from '@tencent/txdocs-aid';
import React, { useState } from 'react';
import { IPagesReflowFeature } from '../pages-reflow-interface';
import { DragableWrapper } from './DragableWrapper';
import style from '../style.less';
import { produce, enableMapSet } from 'immer';
import { ThumbnailPreview } from '@/share-components/mobile-thumbnail-preview';

enableMapSet();
interface IPagesReflowMobilePanelProps {
    handler: IPagesReflowFeature;
    editor: PDFEditor;
    position: POSITIONS;
    selectedPages?: Set<number>;
}
export function MobilePagesReflowPanel(props: IPagesReflowMobilePanelProps) {
    const { handler, editor } = props;
    const pagesCount: number = editor.pages.pagesCount();
    const [thumbnailNumbers, setThumbnailNumbers] = useState([...Array(pagesCount)].map((_, index) => index + 1));
    const [selectedPages, setSelectedPages] = useState(props.selectedPages ?? new Set([1]));
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
    const handleDragEnd = (event) => {
        const { active, over } = event;
        console.log(event);
        if (active.id !== over.id) {
            setThumbnailNumbers((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                const newArray = arrayMove(items, oldIndex, newIndex);
                console.log(newArray);
                return newArray;
            });
        }
    };
    const handleSelectedPages = (isSelected: Boolean, pageNumber: number) => {
        const nextSelectedPages = produce(selectedPages, (draft) => {
            if (isSelected) {
                draft.add(pageNumber);
            } else {
                draft.delete(pageNumber);
            }
        });
        setSelectedPages(nextSelectedPages);
        console.log('nextSelectedPages', nextSelectedPages);
    };
    return (
        <div className={style['mobile-pages-reflow-panel']}>
            <div id="pages-reflow-thumbnail-observer-mobile" className={style['thumbnail-preview-observer-mobile']}>
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={thumbnailNumbers} strategy={rectSortingStrategy}>
                        {thumbnailNumbers.map((id) => (
                            <DragableWrapper id={id} key={id}>
                                <ThumbnailPreview
                                    editor={editor}
                                    pageNumber={id}
                                    intersectionObserverRootId="pages-reflow-thumbnail-observer-mobile"
                                    thumbnailWidth={98}
                                    selected={selectedPages?.has(id)}
                                    selectedCallback={(isSelected) => handleSelectedPages(isSelected, id)}
                                ></ThumbnailPreview>
                            </DragableWrapper>
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
}
