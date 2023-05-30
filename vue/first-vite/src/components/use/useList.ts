import { ref, Ref, onMounted, watch } from "vue";

export default function useList<ItemType extends Object, FilterOption extends Object>(
    requestFn: Function,
    options: OptionsType
) {
    const {
        immediate = true,
        filterOption = ref(),
        pageSize: size = 10,
    } = options;
    // 加载态
    const loading = ref(false);
    // 当前页
    const curPage = ref(1);
    // 总数量
    const total = ref(0);
    // 分页大小
    const pageSize = ref(size);

    // 数据
    const list = ref<ItemType[]>([]);
    // 过滤数据
    // 获取列表数据
    const loadData = async (page = curPage.value, filter=filterOption) => {
        // 设置加载中
        loading.value = true;
        try {
            const {
                data,
                total: count,
            } = await requestFn({pageSize: pageSize.value, page, filterOption: filter});
            list.value = data;
            total.value = count;
        } catch (error) {
            console.log("请求出错了", "error");
        } finally {
            // 关闭加载中
            loading.value = false;
        }
    };

    onMounted(() => {
        if (immediate) {
            loadData(curPage.value);
        }
    });

    watch([curPage, pageSize], () => {
        loadData(curPage.value);
    });
    
    const reset = () => {
        if (!filterOption.value) return;
        const keys = Reflect.ownKeys(filterOption.value);
        filterOption.value = {} as FilterOption;
        keys.forEach((key) => {
            Reflect.set(filterOption.value!, key, undefined);
        });
        loadData(curPage.value, filterOption.value);
    };
    
    return {
        list,
        curPage,
        total,
        pageSize,
        loading,
        loadData,
        reset
    };
}


export interface OptionsType<T = any> {
    filterOption?: Ref<T>;
    immediate?: boolean;
    pageSize?: number;
}
