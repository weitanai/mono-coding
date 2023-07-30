import React, { useState} from 'react';
import { Button } from '@tencent/dui/lib/components/Button';
import { PDFEditor } from '@/editor/pdf-editor/pdf-editor';
import { $t } from '@/locale';
import style from '../style.less';
import { POSITIONS } from '@tencent/txdocs-aid';
import { IPagesReflowFeature } from '../pages-reflow-interface';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { DragableWrapper } from './DragableWrapper';
import { ThumbnailPreview } from '@/share-components';

const THUMBNAIL_WIDTH = 148;

export const PagesReflowTitle = () => {
    return (
        <div className={style['split-title-wrapper']}>
            <span>{$t('页面编辑')}</span>
        </div>
    );
};

export const PagesReflowFooter = (props: { handler: IPagesReflowFeature }) => {
    const [extractDisabled, setExtractDisabled] = useState(true);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '24px',
            }}
        >
            <Button
                type="default"
                style={{ marginRight: '16px', width: 88 }}
                onClick={() => props.handler.closePagesReflowModal()}
            >
                {$t('取消')}
            </Button>
            <Button
                type="primary"
                style={{ width: 88 }}
                onClick={() => props.handler.startExtract()}
                disabled={extractDisabled}
            >
                {$t('提取')}
            </Button>
        </div>
    );
};

interface IPagesReflowPanelProps {
    handler: IPagesReflowFeature;
    editor: PDFEditor;
    position: POSITIONS;
    selectedPages?: Set<number>;
}

export const PagesReflowPanel = (props: IPagesReflowPanelProps): JSX.Element => {
    const { handler, editor } = props;
    const pagesCount: number = editor.pages.pagesCount();
    const [thumbnailNumbers, setThumbnailNumbers] = useState([...Array(pagesCount)].map((_, index) => index + 1));

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

    return (
        <div>
            <div id="pages-reflow-thumbnail-observer" className={style['thumbnail-preview-wrapper']}>
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={thumbnailNumbers} strategy={rectSortingStrategy}>
                        {thumbnailNumbers.map((id) => (
                            <DragableWrapper id={id} key={id}>
                                <ThumbnailPreview
                                    editor={editor}
                                    pageNumber={id}
                                    intersectionObserverRootId='pages-reflow-thumbnail-observer'
                                    thumbnailWidth={THUMBNAIL_WIDTH}
                                ></ThumbnailPreview>
                            </DragableWrapper>
                        ))}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
};
