import React from 'react';
import { ContextService, Feature, Inject } from '@tencent/workbench';
import { ADAPTER } from '@/workbench/adapter/adapter-interface';
import { FeatureNames } from '@/features/feature-names';
import { Modal } from '@tencent/dui/lib/components/Modal';
import ModalMobile from '@tencent/dui-mobile/lib/components/Modal';
import ua from '@tencent/docs-user-agent';
import { IPagesReflowFeature } from './pages-reflow-interface';
import { setNativeHeaderDisplay, supportNativeTitleBar } from '../mobile-titlebar/native-header/native-header-service';
import { POSITIONS } from '@tencent/txdocs-aid';
import { PDFEditor } from '@/editor/pdf-editor/pdf-editor';
import { PagesReflowFooter, PagesReflowPanel, PagesReflowTitle } from './components/PageReflowPanel';
import { MobilePagesReflowPanel } from './components/PagesReflowMobilePanel';

@Feature({
    name: FeatureNames.PAGES_REFLOW,
    adapters: [ADAPTER.PDF_VIEWER],
})
export class PagesReflowHandler implements IPagesReflowFeature {
    private modal: ReturnType<typeof Modal.confirm> | null;
    private position: POSITIONS;
    private extractPages: Set<number> = new Set();

    @Inject()
    private contextService: ContextService;

    get editor() {
        return this.contextService.context.editor as PDFEditor;
    }

    public setReflowPages(nextPagesSet: Set<number>) {
        this.extractPages = nextPagesSet;
    }

    public startExtract(): void {
        throw new Error('Method not implemented.');
    }

    public closePagesReflowModal(): void {
        this.modal?.close();
        this.modal = null;
        // native header 在弹窗出现的时候被隐藏了，弹窗消失后应该重新显示出来
        if (ua.isMobile && supportNativeTitleBar()) {
            setNativeHeaderDisplay(true, () => {});
        }
    }

    public showPagesReflowPanel(selectedPages: Set<number> | undefined, position: POSITIONS): void {
        this.position = position;
        if (ua.isMobile) {
            this.showMobilePagesReflowModal(selectedPages);
        } else {
            this.showPCPagesReflowPanel(selectedPages);
        }
    }

    private showMobilePagesReflowModal = (selectedPages: Set<number> = new Set()) => {
        if (supportNativeTitleBar()) {
            setNativeHeaderDisplay(false, () => {});
        }
        this.modal = ModalMobile.confirm({
            title: null,
            content: (
                <MobilePagesReflowPanel
                    selectedPages={selectedPages}
                    handler={this}
                    editor={this.editor}
                    position={this.position}
                />
            ),
            footer: null,
            style: {
                position: 'absolute',
                width: '100%',
                borderRadius: 0,
                inset: 0,
                padding: 0,
                height: '100%',
            },
        });
    };

    private showPCPagesReflowPanel = (selectedPages: Set<number> = new Set()) => {
        if (this.modal) {
            return;
        }

        this.modal = Modal.confirm({
            title: <PagesReflowTitle />,
            content: (
                <PagesReflowPanel
                    handler={this}
                    editor={this.editor}
                    selectedPages={selectedPages}
                    position={this.position}
                />
            ),
            footer: <PagesReflowFooter handler={this} />,
            onClose: () => (this.modal = null),
            style: {
                width: 880,
                maxHeight: 600,
                ...(ua.isSafari ? { transitionDuration: '0s' } : {}),
            },
        });
    };
}
