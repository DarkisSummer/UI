import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MyEvent, events } from '../assets/event'
import { AddEventData } from '../components/Admin/AddEvent'

const getCities = (events: MyEvent[]): string[] => {
  const cities: Set<string> = new Set()
  const evntLen = events.length
  for (let i = 0; i < evntLen; i++) {
    const city = events[i].city
    cities.add(city)
  }
  return Array.from(cities)
}

type EventsState = {
  events: MyEvent[],
  cities: string[] 
}
const initialCities = getCities(events)
const initialState: EventsState = {
  events: events,
  cities: initialCities
}

type EventUser = {
  id: string,
  name: string 
}


export const counterSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<AddEventData>) => {
      const newEvent: MyEvent = {
        name: action.payload.name,
        description: action.payload.description,
        startDate: new Date(action.payload.startDate),
        endDate: new Date(action.payload.endDate),
        city: action.payload.city,
        place:action.payload.place,
        id: Math.random().toString(16).slice(2),
        imgSrc: '',
        people: []
      }
      const newEvents = [...state.events, newEvent]
      console.log(newEvent);
      
      state.events = newEvents
      state.cities = getCities(newEvents)
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      const newEvents = state.events.filter(item => item.id !== action.payload)
      state.events = newEvents
      state.cities = getCities(newEvents)
    },
    addPeople: (state, action: PayloadAction<EventUser>) => {
      state.events.find(item => item.id === action.payload.id)?.people.push(action.payload.name)
    },
  }
})

export const { addEvent, deleteEvent, addPeople } = counterSlice.actions

export default counterSlice.reducer