import React from 'react';
import { MobilePanelKey, ToolbarButtonName } from '@/workbench/schema';
import { MobileToolbarConfig, ToolbarConfig } from '@tencent/workbench';
import { $t } from '@/locale';
import FileExtractIcon from '@tencent/docs-design-resources/icon/desktop/svg/vip_extract_regular_24.svg';
import style from './style.less';

export const PAGES_REFLOW_TOOLBAR_ITEM: ToolbarConfig[] = [
    {
        name: ToolbarButtonName.PAGES_REFLOW,
        type: 'text',
        icon: <img src={FileExtractIcon} />,
        text: $t('页面管理'),
        style: {
            width: 'auto',
            padding: '0 4px 0px 2px',
        },
    },
];

export const PAGES_REFLOW_MOBILE_TOOLBAR_CONFIG: MobileToolbarConfig[] = [
    {
        name: MobilePanelKey.PAGES_REFLOW,
        text: $t('页面管理'),
        respectOffline: true,
        type: 'button',
        iconClass: style['icon-mobile-toolbar-extract'],
        style: {
            wordBreak: 'keep-all',
        },
    },
];
