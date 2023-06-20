import { TechEventBase } from './global';





type Hackathon = TechEventBase & {
    location: string,
    price?: number,
    kind: 'hackathon'
}

type TechEvent =
    Conference | Webinar | Meetup | Hackathon

type EventKind = TechEvent['kind']

function filterByKind(
    list: TechEvent[],
    kind: EventKind
): TechEvent[] {
    return list.filter(el => el.kind === kind)
}

// filterByKind([{}] as Hackathon[], 'hackathon') // Error


type UserEvents = {
    watching: TechEvent[],
    rvsp: TechEvent[],
    attended: TechEvent[],
    signedout: TechEvent[],
}

function isUserEventListCategory(
    list: UserEvents,
    category: string
   ) {
    return Object.keys(list).includes(category)
   }

function filterUserEvent(
    list: UserEvents,
    category: string,
    filterKind?: EventKind
) {
    if (isUserEventListCategory(list, category)) {
        const filteredList = list[category]
        if (filterKind) {
            return filteredList.filter(event =>
                event.kind === filterKind)
        }
        return filteredList
    }
    return list
}
filterUserEvent({} as UserEvents, 'fasdfasd', 'conference')