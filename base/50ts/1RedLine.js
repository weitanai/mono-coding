const storage = {
    max: 5000,
    items: []
};
Object.defineProperty(storage, 'max', {
    writable: false,
    value: 5000
});
let currentStorage = 0;
function storageUsed() {
    if (currentStorage) {
        return currentStorage;
    }
    currentStorage = 0;
    for (let i = 0; i < storage.items.length; i++) {
        currentStorage += storage.items[i]?.weight;
    }
    return currentStorage;
}
function add(item) {
    if (storage.max - item.weight >= storageUsed()) {
        storage.items.push(item);
        currentStorage += item.weight;
    }
}
export {};
