import { Controller, Loader, awaitLoad, Toolbar, MobileToolbar, MobileToolbarService } from '@tencent/workbench';
import type { IDynamicLoader } from '@tencent/workbench';
import { ADAPTER } from '@/workbench/adapter/adapter-interface';
import { FeatureNames } from '@/features/feature-names';
import { IPagesReflowFeature } from './pages-reflow-interface';
import { PAGES_REFLOW_MOBILE_TOOLBAR_CONFIG, PAGES_REFLOW_TOOLBAR_ITEM } from './config';
import { loadThumbnailHandler, SIDEBAR_TAB_ID } from '../thumbnail/thumbnail-interface';
import { MobilePanelKey, ToolbarButtonName } from '@/workbench/schema';
import { LeftSidebarService } from '@/services/left-sidebar-service';
import { POSITIONS } from '@tencent/txdocs-aid';

@Controller({
    name: FeatureNames.PAGES_REFLOW,
    adapters: [ADAPTER.PDF_VIEWER],
    toolbarItems: PAGES_REFLOW_TOOLBAR_ITEM,
    mobileToolbarItems: PAGES_REFLOW_MOBILE_TOOLBAR_CONFIG,
})
export class PagesReflowController {
    constructor(
        @Loader(IPagesReflowFeature) private loader: IDynamicLoader<IPagesReflowFeature>,
        private leftSidebarService: LeftSidebarService,
        private mobileToolbarService: MobileToolbarService
    ) {}

    private get feature() {
        return this.loader.instance!;
    }

    @awaitLoad()
    @Toolbar(ToolbarButtonName.PAGES_REFLOW, 'onClick')
    public async onClickToolbarButton() {
        const thumbnailHandler = await loadThumbnailHandler();
        const isThumbnailOpen = this.leftSidebarService.isTabOpen(SIDEBAR_TAB_ID);
        // 如果当前缩略图都没有打开，就不从缩略图里取选中页数
        const thumSelectedPages = isThumbnailOpen ? new Set(thumbnailHandler.getThumbnailSelected()) : undefined;
        // 缩略图选中大于 1 页，进入提取页面才默认选中
        const selectedPages = (thumSelectedPages && thumSelectedPages?.size > 1) ? thumSelectedPages : undefined;
        this.feature.showPagesReflowPanel(selectedPages, POSITIONS.CAPSULE);
    };

    @awaitLoad()
    @MobileToolbar(MobilePanelKey.PAGES_REFLOW, 'onClick')
    public async onClickMobileToolBoxButton() {
        this.mobileToolbarService.closePanel();
        this.feature.showPagesReflowPanel(new Set([1]), POSITIONS.CAPSULE); // 默认选中第一页
    }
}
