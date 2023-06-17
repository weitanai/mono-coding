import type { ShipStorage, StorageItem } from './global';
const storage: ShipStorage = {
    max: 5000,
    items: []
}

Object.defineProperty(storage, 'max', {
    writable: false,
    value: 5000

})
let currentStorage = 0;

function storageUsed() {
    if (currentStorage) {
        return currentStorage
    }
    currentStorage = 0
    for (let i = 0; i < storage.items.length; i++) {
        currentStorage += storage.items[i]?.weight
    }
    return currentStorage
}

function add(item: StorageItem) {
    if (storage.max - item.weight >= storageUsed()) {
        storage.items.push(item)
        currentStorage += item.weight
    }
}


function selectDeliveryAddress(addressOrIndex:
    unknown): string {
    if (typeof addressOrIndex === 'number' ) {
        return 'addressOrIndex' + addressOrIndex;
    }
    return addressOrIndex
}