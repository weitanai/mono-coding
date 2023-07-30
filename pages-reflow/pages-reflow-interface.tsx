import { DynamicLoaderRegistry } from '@tencent/workbench';
import { FeatureNames } from '@/features/feature-names';
import { POSITIONS } from '@tencent/txdocs-aid';

export interface IPagesReflowFeature {
    showPagesReflowPanel(selectedPages: Set<number> | undefined, position: POSITIONS): void;
    setReflowPages(nextPagesSet: Set<number>): unknown;
    startExtract(): void;
    closePagesReflowModal(): void;
}

export const IPagesReflowFeature = Symbol.for(`feature:${FeatureNames.PAGES_REFLOW}`);

DynamicLoaderRegistry.merge(IPagesReflowFeature, {
    useFactory: async () => {
        const { PagesReflowHandler } = await import(
            /* webpackChunkName: "pages-reflow-handler" */
            './pages-reflow-handler'
        );
        return PagesReflowHandler;
    },
});

export async function loadPagesReflowHandler(): Promise<IPagesReflowFeature> {
    return await DynamicLoaderRegistry.get(IPagesReflowFeature)?.getInstance();
}
