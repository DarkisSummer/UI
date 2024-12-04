import '../App.css'
import EventCard from '../components/Event/EventCard'
import styled from 'styled-components'
import { useAppSelector } from '../redux/hooks'
import { useEffect, useState } from 'react'
import { Select } from 'antd'
import { MyEvent } from '../assets/event'
import Container from "../components/Container";

const StyledEventsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  gap: 16px;

  .evnt {
      display: flex;
      background: var(--event-card-background);
      cursor: pointer;
      border-radius: 16px;
      gap: 24px;
      padding: 8px 8px;
  }

  .evnt:hover {
    background: var(--event-card-background-hover);
    
  }

  .evnt__pic {
      display: flex;
      margin: 10px;
      height: 150px;
      width: 150px;
      align-items: left;
  }

  .evnt__content {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: left;
      margin-top: 10px;
      color: var(--text-color);
  }
`

const StyledEvents = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 40px;
  }
  .evnt_list_settings {
    display: flex;
    gap: 12px;
    align-items: center;
    font-size: 20px;
  }
`

function Events() {
  const events = useAppSelector(state => state.events.events)
  const [filteredEvents, setFilteredEvents] = useState<MyEvent[]>(events)

  const cities = useAppSelector(state => state.events.cities)
  const selectCitiesArr = cities.map(city => {
    return {
      label: city,
      value: city
    }
  })
  const [city, setCity] = useState('Any')

  useEffect(() => {
    if (city === 'Any') {
      setFilteredEvents(events)
    } else {
      setFilteredEvents(events.filter((item) => item.city == city))
    }
  }, [events, city])
  const [sortDir, setSortDir] = useState('ASC')
  const [sortedEvents, setSortedEvents] = useState(filteredEvents)
  const sortDirElements = [
    {
      label: 'Upcoming',
      value: 'ASC'
    },
    {
      label: 'Faraway',
      value: 'DESC'
    }
  ]

  useEffect(() => {
    const newArray: MyEvent[] = [...filteredEvents]
    if (sortDir === 'ASC') {
      newArray.sort((a, b) => (a.startDate.getTime() - b.startDate.getTime()))
      setSortedEvents(newArray)
    } else if (sortDir === 'DESC') {
      newArray.sort((a, b) => (b.startDate.getTime() - a.startDate.getTime()))
      setSortedEvents(newArray)
    }
  }, [filteredEvents, sortDir])

  return (
    <Container>
      <StyledEvents>
        <p>
          List of current events
        </p>
        <div className='evnt_list_settings'>
          Sort:
          <Select
            defaultValue="ASC"
            style={{ width: 120 }}
            value={sortDir}
            onChange={setSortDir}
            options={sortDirElements}
            size='large'
          />
          Filter:
          <Select
            defaultValue="Any"
            style={{ width: 120 }}
            value={city}
            onChange={setCity}
            options={[{ label: 'Any', value: 'Any' }, ...selectCitiesArr]}
            size='large'
          />
        </div>
      </StyledEvents>
      <StyledEventsList>{sortedEvents.map((item) => <EventCard {...item} />)}</StyledEventsList>
    </Container>
  )
}

export default Events