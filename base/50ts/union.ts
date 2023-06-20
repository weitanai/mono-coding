type TechEventBase = {
    title: string,
    description: string
    date: Date,
    capacity: number,
    rsvp: number,
}
// value type

type Conference  = TechEventBase & {
    location: string,
    price: number,
    talks: string[],
    kind: 'conference'
}
type Meetup = TechEventBase & {
    location: string,
    price: string,
    talks: string[],
    kind: 'meetup'
}
type Webinar = TechEventBase & {
    url: string,
    price?: number,
    talks: string,
    kind: 'webinar'
}


interface TechEvent {
    kind: 'conference' | 'meetup' | 'webinar',
    title: string,
    price?: number,
    location?: string,
    url?: string,
}

function getEventTeaser(event: TechEvent) {
    switch (event.kind) {
        case 'conference':
            // We now know that I'm in type Conference
            return `${event.title} (Conference), ` +
                // Suddenly I don't have to check for price as
                // TypeScript knows it will be there
                `priced at ${event.price} USD`
        case 'meetup':
            // We now know that we're in type Meetup
            return `${event.title} (Meetup), ` +
                // Suddenly we can say for sure that this
                // event will have a location, because the
                // type tells us
                `hosted at ${event.location}`
        case 'webinar':
            // We now know that we're in type Webinar
            return `${event.title} (Webinar), ` +
                // Suddenly we can say for sure that there will
                // be a URL
                `available online at ${event.url}`
        default:
            throw new Error('Not sure what to do withthat!')
    }
}