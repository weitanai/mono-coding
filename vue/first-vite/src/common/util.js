import {categoryList} from "./data";
export function getCategoryName(id) {
    const item = categoryList.filter(item => item.id === id);
    return  item[0] ? item[0].name : "";
}
