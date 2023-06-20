export type StorageItem = {
    weight: number
}
export type ShipStorage = {
    max: number,
    items: StorageItem[]
}

export type TechEventBase = {
    title: string,
    description: string
    date: Date,
    capacity: number,
    rsvp: number,
}